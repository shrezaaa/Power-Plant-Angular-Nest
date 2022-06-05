import { Injectable } from '@angular/core';
import { BaseHttp } from 'apps/power-plant/src/app/core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class CureService {
  constructor(private baseHttp: BaseHttp) {}

  getCurveData(model){
    
  }
}
