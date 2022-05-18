import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { PlantModel } from '../../../shared/models/plant.model';
import { PlantsService } from '../../../shared/services/plants.service';

@Component({
  selector: 'p-plant-plants-map',
  templateUrl: './plants-map.component.html',
  styleUrls: ['./plants-map.component.scss'],
})
export class PlantsMapComponent {
  plantList: PlantModel[] = [];
  infoWindow: any;
  lat: number = 36.67284479710437;
  lng: number = 48.4976206019898;
  plantIDInfoWidget : number 
  constructor(private readonly _plantService: PlantsService) {
    this.getPlantsList();
  }

  getPlantsList() {
    this._plantService.getPlants({}).subscribe((res) => {
      if (res) {
        console.log(res);

        this.plantList = res.map((item) => new PlantModel(item));
      }
    });
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }
  onMouseOver(infoWindow, gm) {
    
    if (gm.lastOpen != null) {
        gm.lastOpen.close();
    }
    gm.lastOpen = infoWindow;
    infoWindow.open();
}
}
