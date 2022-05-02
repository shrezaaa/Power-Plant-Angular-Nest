import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectData } from '../../types/select-data';

@Component({
  selector: 'p-plant-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss'],
})
export class ListSelectionComponent implements OnInit {
  @Input('data') data: Array<SelectData> = [];
  // @Input('valueProp') valueProp: string;
  @Input('labelProp') labelProp: string;
  @Input('selected') selectedObject: SelectData;
  @Output('selectedChange') selectedChange = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onSelectItem(item) {
    this.selectedObject = item;
    this.selectedChange.emit(item);
  }
}
