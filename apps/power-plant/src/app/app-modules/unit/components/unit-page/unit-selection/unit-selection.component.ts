import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';

@Component({
  selector: 'p-plant-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss'],
})
export class UnitSelectionComponent implements OnInit {
  @Input('data') data: Array<SelectData>;
  selectedUnit: SelectData;
  @Output('selectedUnitChange') selectedUnitChange =
    new EventEmitter<SelectData>();

    // @Inpu

  deviceTypes: [
    { name: 'CombinerBox'; value: 1 },
    { name: 'Inverter'; value: 2 },
    { name: 'Wamp'; value: 3 }
  ];
  constructor() {}

  ngOnInit(): void {}
}
