import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'p-plant-isactive-cell',
  templateUrl: './isactive-cell.component.html',
  styleUrls: ['./isactive-cell.component.scss'],
})
export class IsactiveCellComponent implements OnInit, ICellRendererAngularComp {
  params: ICellRendererParams;
  field: string;
  rowData: any;
  cellData: any;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    this.field = params.colDef.field;
    this.rowData = params.data;
    this.cellData = params.data[this.field];
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }
}
