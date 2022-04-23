import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  FirstDataRenderedEvent,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';

@Component({
  selector: 'p-plant-inv-unit-table',
  templateUrl: './inv-unit-table.component.html',
  styleUrls: ['./inv-unit-table.component.scss'],
})
export class InvUnitTableComponent implements OnInit {
  @ViewChild('grid') grid: AgGridAngular;
  gridApi: GridReadyEvent;
  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'make', flex: 1 },
      { field: 'model', flex: 1 },
      { field: 'price', flex: 1 },
    ],
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    animateRows: true,
  };
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
  constructor() {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params;
  }
}
