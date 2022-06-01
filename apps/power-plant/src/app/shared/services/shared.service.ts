import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlantModel } from '../../app-modules/plants/shared/models/plant.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  selectedPlant$: BehaviorSubject<Partial<PlantModel>> = new BehaviorSubject<
    Partial<PlantModel>
  >({ PlantID: null, PlantName: 'All' });

  constructor() {}

  public get selectedPlant(): Observable<Partial<PlantModel>> {
    return this.selectedPlant$.asObservable();
  }

  public setSelectedPlant(plant: Partial<PlantModel>) {
    this.selectedPlant$.next(plant);
  }
}
