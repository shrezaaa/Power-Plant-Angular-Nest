import { Component, OnInit } from '@angular/core';
import { FloatLabelType } from '@angular/material/form-field';
import { SelectData } from '../../../shared/types/select-data';

@Component({
  selector: 'p-plant-invertor-units',
  templateUrl: './invertor-units.component.html',
  styleUrls: ['./invertor-units.component.scss'],
})
export class InvertorUnitsComponent implements OnInit {
  selectedUnit: SelectData;
  units: Array<SelectData> = [
    { name: 'a', value: 1 },
    { name: 'ab', value: 1 },
    { name: 'abc', value: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
