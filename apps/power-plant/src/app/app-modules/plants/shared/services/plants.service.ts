import { Injectable } from '@angular/core';
import { BaseHttp } from 'apps/power-plant/src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private readonly baseHttp: BaseHttp) {}

  getPlants(model) {
  return  this.baseHttp
      .request('GET', 'plants/search')
      .setLoading(true)
      .setQueryParams(model)
      .send();
  }
}
