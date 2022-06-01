import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectData } from '../../types/select-data';

@Component({
  selector: 'p-plant-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss'],
})
export class ListSelectionComponent implements OnInit {
  @Input('data') data: Array<any> = [];
  @Input('valueProp') valueProp: string = 'value';
  @Input('labelProp') labelProp: string = 'name';
  @Input('selectedValue') selectedValue: any;
  @Output('selectedValueChange') selectedValueChange = new EventEmitter<any>();

  @Output('selectedObjectChange') selectedObjectChange =
    new EventEmitter<any>();

  @Input('loading') loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectItem(item) {
    this.selectedValue = item[this.valueProp];
    this.selectedValueChange.emit(this.selectedValue);
    this.selectedObjectChange.emit(item);
  }
}
