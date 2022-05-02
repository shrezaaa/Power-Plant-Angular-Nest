import { Component, OnInit } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';

@Component({
  selector: 'p-plant-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss'],
})
export class UnitsPageComponent implements OnInit {
  units: Array<SelectData> = [
    { name: 'Inverter a', value: 1 },
    { name: 'Inverter ab', value: 1 },
    { name: 'Inverter abc', value: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelectUnit(event) {
    console.log(event);
  }
}
