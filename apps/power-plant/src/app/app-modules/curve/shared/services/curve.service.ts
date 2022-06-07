import { Injectable } from '@angular/core';
import { BaseHttp } from 'apps/power-plant/src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class CurveService {
  constructor(private baseHttp: BaseHttp) {}

  getCurveData(model: { Date; DeviceTypeID; DeviceID; Column }) {
    return this.baseHttp
      .request('GET', 'unit/curve')
      .setLoading(true)
      .setQueryParams(model)
      .send();
  }
}
