import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private readonly baseHttp: BaseHttp) {}

  checkConnection() {
    this.baseHttp
      .request('GET', 'hello')
      .setLoading(true)
      .send()
      .subscribe((value) => {
        console.log(value);
      });
  }
}
