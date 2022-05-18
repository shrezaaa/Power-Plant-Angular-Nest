import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectData } from '../../types/select-data';

@Component({
  selector: 'p-plant-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.scss'],
})
export class ListSelectionComponent implements OnInit {
  @Input('data') data: Array<any> = [];
  // @Input('valueProp') valueProp: string;
  @Input('labelProp') labelProp: string = 'name';
  @Input('selected') selectedObject: any = null;
  @Output('selectedChange') selectedChange = new EventEmitter<any>();

  @Input('loading') loading: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  onSelectItem(item) {
    this.selectedObject = item;
    this.selectedChange.emit(item);
  }
}
