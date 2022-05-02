import { Injectable } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly baseHttp: BaseHttp) {}

  getYieldTrend(model) {
    return this.baseHttp
      .request('GET', 'dashboard/yieldTrend')
      .setLoading(true)
      .setQueryParams(model)
      .send();
  }
 
  getTemperatureChart(model) {
    return this.baseHttp
      .request('GET', 'dashboard/temperatureChart')
      .setLoading(true)
      .setQueryParams(model)
      .send();
  }
}
