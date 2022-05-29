import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'p-plant-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss']
})
export class ActionCellComponent implements OnInit, ICellRendererAngularComp {
  params: ICellRendererParams;
  field:string
  rowData:any
  cellData:any
  constructor() {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    console.log(params);
    this.field=params.colDef.field
    this.rowData=params.data
    this.cellData=params.data[this.field]
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }
}
