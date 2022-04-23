import { Component, OnInit } from '@angular/core';
import { SelectData } from '../../../shared/types/select-data';

@Component({
  selector: 'p-plant-plants-map-view',
  templateUrl: './plants-map-view.component.html',
  styleUrls: ['./plants-map-view.component.scss']
})
export class PlantsMapViewComponent implements OnInit {
  selectedPlant: SelectData;
  plants: Array<SelectData> = [
    { name: 'Plant a', value: 1 },
    { name: 'Plant ab', value: 1 },
    { name: 'Plant abc', value: 1 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
