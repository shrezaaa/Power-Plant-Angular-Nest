import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { PlantModel } from '../../app-modules/plants/shared/models/plant.model';
import { BaseHttp } from '../../core/services/base-http.service';
import { SelectData } from '../types/select-data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedPlant$: BehaviorSubject<Partial<PlantModel>> = new BehaviorSubject<
    Partial<PlantModel>
  >({ PlantID: 1, PlantName: 'Origin' });

  plants$: BehaviorSubject<Array<PlantModel>> = new BehaviorSubject<
    Array<PlantModel>
  >([]);

  constructor(private baseHttp: BaseHttp) {}

  deviceTypes: Array<SelectData> = [
    { name: 'CombinerBox', value: 1 },
    { name: 'Inverter', value: 2 },
    { name: 'Wamp', value: 3 },
  ];

  public get plants(): Observable<Array<PlantModel>> {
    return this.plants$.asObservable();
  }

  public get selectedPlant(): Observable<Partial<PlantModel>> {
    return this.selectedPlant$.asObservable();
  }

  public setSelectedPlant(plant: Partial<PlantModel>) {
    this.selectedPlant$.next(plant);
  }

  public getPlants(model, loading = true) {
    let subject: Subject<any> = new Subject<any>();
    this.baseHttp
      .request('GET', 'plants/search')
      .setQueryParams(model)
      .send()
      .pipe(
        map((res) => {
          subject.next(res);
          return res.map((el) => new PlantModel(el));
        })
      )
      .subscribe((value) => {
        this.plants$.next(value);
      });
    return subject;
  }
}
