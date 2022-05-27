import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'p-plant-custom-cell',
  templateUrl: './custom-cell.component.html',
  styleUrls: ['./custom-cell.component.scss'],
})
export class CustomCellComponent implements OnInit, ICellRendererAngularComp {
  params: ICellRendererParams;
  title= 'ss';
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  sayHi() {
    console.log('hi');
  }

  sayTitle() {
    console.log(this.title);
  }

  refresh(params: ICellRendererParams) {
    return true;
  }
}
