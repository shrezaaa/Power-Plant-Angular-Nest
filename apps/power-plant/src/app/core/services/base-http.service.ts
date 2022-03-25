import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { environment } from 'apps/power-plant/src/environments/environment';
import { catchError, EMPTY, Observable, retry, tap } from 'rxjs';
import { AlertService } from '../alert/alert.service';
import { HttpVerb, ParamDto } from '../type/base-http.type';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class BaseHttp {
  constructor(private injector: Injector) {}

  request(verb: HttpVerb = 'GET', requestUrl: string): RequestBuilder {
    return new RequestBuilder(verb, requestUrl, this.injector);
  }
}

export class RequestBuilder {
  httpVerb: HttpVerb;
  requestUrl: string;
  baseUrl = environment.serviceBaseUrl;
  queryParams: Array<ParamDto>;
  bodyParams: Array<ParamDto>;
  //other services
  http: HttpClient;
  alertSrvc: AlertService;
  loadingService:LoadingService

  constructor(verb: HttpVerb, requestUrl: string, injector: Injector) {
    this.httpVerb = verb;
    this.requestUrl = requestUrl;
    this.http = injector.get(HttpClient);
    this.alertSrvc = injector.get(AlertService);
    this.loadingService = injector.get(LoadingService);
  }

  call(): Observable<any> {
    let request$: Observable<any>;

    if (!window.navigator.onLine) {
      this.alertSrvc.showToaster(
        'you are not connected to Internet ,Please check your connection!',
        'DANGER'
      );
      return EMPTY;
    }

    let url =
      this.baseUrl +
      this.requestUrl +
      this.getSerializedParams(this.queryParams);

    //check hdr if needed
    //test token
    let token = localStorage.getItem('Token');
    switch (this.httpVerb) {
      case 'GET':
        request$ = this.http.get(url);
        break;
      case 'POST':
        request$ = this.http.post(url, this.bodyParams ,{headers:{'Content-Type': 'application/json'}});
    }
    this.loadingService.show()
    return request$.pipe(
      retry(0),
      tap((i) => {
        // if (i.type != 0) this.loadingSrv.hide();
      }),
      // catchError((error: HttpErrorResponse) =>
      //   this.errorHandler(error, tokenizedRequest)
      // )
    );;
  }

  setBaseUrl(url): RequestBuilder {
    this.baseUrl = url;
    return this;
  }

  setQueryParams(model): RequestBuilder {
    this.queryParams = this.createParamList(model);
    return this;
  }

  setBodyParams(model): RequestBuilder {
    this.bodyParams = this.createParamList(model);
    return this;
  }

  private getSerializedParams(params: ParamDto[]) {
    if (!params || params.length == 0) return '';
    return '?' + params.map((param) => param.key + '=' + param.value).join('&');
  }

  public createParamList(model: any): ParamDto[] {
    return model;
    // return Object.entries(model).map((i) => {
    //   return { key: i[0], value: String(i[1]) };
    // });
  }
}
