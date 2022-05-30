import { AgmInfoWindow, AgmMap } from '@agm/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NameValueDetailSection } from 'apps/power-plant/src/app/shared/components/detail-section/detail-section.component';
import * as Leaflet from 'leaflet';
import { PlantModel } from '../../../shared/models/plant.model';
import { PlantsService } from '../../../shared/services/plants.service';

@Component({
  selector: 'p-plant-plants-map',
  templateUrl: './plants-map.component.html',
  styleUrls: ['./plants-map.component.scss'],
})
export class PlantsMapComponent implements AfterViewInit, OnChanges {
  @Input('plantsList') plantsList: Array<PlantModel> = [];
  @Input('selectedPlantID') selectedPlantID: number;
  @ViewChild('gm') gm: any;
  @ViewChildren('infoWindows') infoWindows: QueryList<AgmInfoWindow>;

  infoData: Array<NameValueDetailSection> = [];
  mapInstance: L.Map;

  mapView = {
    lat: 36.67284479710437,
    lng: 48.4976206019898,
  };

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedPlantID && this.selectedPlantID) {
      let index = this.plantsList.findIndex(
        (el) => el.PlantID == this.selectedPlantID
      );
      this.infoWindows.get(index);
      this.onSelectPlant(this.infoWindows.get(index), this.plantsList[index]);
    }
  }

  ngAfterViewInit(): void {}

  onMapReady(map: L.Map) {
    this.cdr.detectChanges();
    this.mapInstance = map;
    map.invalidateSize();
  }

  onSelectPlant(infoWindow, plant: PlantModel) {
    if (this.gm.lastOpen != null) {
      this.gm.lastOpen.close();
    }
    this.gm.lastOpen = infoWindow;
    this.mapView = {
      lat: plant.Lat,
      lng: plant.Long,
    };
    this.fillInfoData(plant);
    infoWindow.open();
  }

  fillInfoData(plant: PlantModel) {
    this.infoData = [
      {
        name: 'Phone',
        value: plant.Phone,
        type: 'phone',
      },
      {
        name: 'Is Active?',
        value: plant.IsActiveName,
      },
      {
        name: 'Installed Power',
        value: plant.InstalledPower + 'W',
      },
      {
        name: 'Real Production',
        value: plant.RealProduction + 'W',
      },
      {
        name: 'Normal Production',
        value: plant.NormalProduction + 'W',
      },
      {
        name: 'Address',
        value: plant.Address,
        class: 'col-span-12',
      },
      {
        name: 'Description',
        value: plant.Description,
        class: 'col-span-12',
      },
    ];
  }
}
