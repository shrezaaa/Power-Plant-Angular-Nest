import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { environment } from 'apps/power-plant/src/environments/environment';
import { Observable } from 'rxjs';
import { HttpVerb, ParamDto } from '../type/base-http.type';

export function ApiRequest(
  verb: HttpVerb = 'GET',
  requestUrl: string,
  injector: Injector
): RequestBuilder {
  return new RequestBuilder(verb, requestUrl, injector);
}

export class RequestBuilder {
  httpVerb: HttpVerb;
  requestUrl: string;
  baseUrl = environment.serviceBaseUrl;
  queryParams: Array<ParamDto>;
  bodyParams: Array<ParamDto>;
  //other services
  http: HttpClient;

  constructor(verb: HttpVerb, requestUrl: string, injector: Injector) {
    this.httpVerb = verb;
    this.requestUrl = requestUrl;
    this.http = injector.get(HttpClient);
  }

  call(): Observable<any> {
    let request$: Observable<any>;
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
        request$ = this.http.post(url, this.bodyParams);
    }

    return request$;
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
    return Object.entries(model).map((i) => {
      return { key: i[0], value: String(i[1]) };
    });
  }
}
