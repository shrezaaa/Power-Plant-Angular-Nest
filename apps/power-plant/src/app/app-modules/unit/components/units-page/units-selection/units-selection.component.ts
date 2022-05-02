import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';

@Component({
  selector: 'p-plant-units-selection',
  templateUrl: './units-selection.component.html',
  styleUrls: ['./units-selection.component.scss'],
})
export class UnitsSelectionComponent implements OnInit {
  @Input('data') data: Array<SelectData>;
  selectedUnit: SelectData;
  @Output('selectedUnitChange') selectedUnitChange =
    new EventEmitter<SelectData>();
    
  units: Array<SelectData> = [
    { name: 'Inverter a', value: 1 },
    { name: 'Inverter ab', value: 1 },
    { name: 'Inverter abc', value: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
