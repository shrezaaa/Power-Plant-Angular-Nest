import { Component, OnInit } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { SelectData } from '../../../shared/types/select-data';

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
