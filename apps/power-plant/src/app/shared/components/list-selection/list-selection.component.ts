import { Component, Input, OnInit } from '@angular/core';
import { SelectData } from '../../types/select-data';

@Component({
  selector: 'p-plant-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss'],
})
export class ListSelectionComponent implements OnInit {
  @Input('data') data: Array<SelectData> = [];
  @Input('selected') selectedObject: SelectData;
  constructor() {}

  ngOnInit(): void {}
}
