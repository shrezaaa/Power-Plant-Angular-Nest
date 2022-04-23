import { Component, OnInit } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';

@Component({
  selector: 'p-plant-inverter-units',
  templateUrl: './inverter-units.component.html',
  styleUrls: ['./inverter-units.component.scss'],
})
export class InverterUnitsComponent implements OnInit {
  selectedUnit: SelectData;
  units: Array<SelectData> = [
    { name: 'Inverter a', value: 1 },
    { name: 'Inverter ab', value: 1 },
    { name: 'Inverter abc', value: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
