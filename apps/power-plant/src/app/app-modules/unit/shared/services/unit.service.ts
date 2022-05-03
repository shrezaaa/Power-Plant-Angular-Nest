import { Injectable } from '@angular/core';
import { BaseHttp } from 'apps/power-plant/src/app/core/services/base-http.service';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  constructor(private readonly baseHttp: BaseHttp) {}

  getUnits(model) {
    return this.baseHttp
      .request('GET', 'unit/search')
      .setQueryParams(model)
      .setLoading(true)
      .send();
  }

  getInvAnalysisData(model) {
    return this.baseHttp
      .request('GET', 'unit/invAnalysis')
      .setQueryParams(model)
      .setLoading(true)
      .send();
  }
}
