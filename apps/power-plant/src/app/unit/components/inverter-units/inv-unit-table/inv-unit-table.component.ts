import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  ColumnResizedEvent,
  FirstDataRenderedEvent,
  GridOptions,
} from 'ag-grid-community';

@Component({
  selector: 'p-plant-inv-unit-table',
  templateUrl: './inv-unit-table.component.html',
  styleUrls: ['./inv-unit-table.component.scss'],
})
export class InvUnitTableComponent implements OnInit {
  @ViewChild('grid') grid: AgGridAngular;
  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'make', sortable: true, filter: true },
      { field: 'model', sortable: true, filter: true },
      { field: 'price', sortable: true, filter: true },
    ],
    defaultColDef: {
      resizable: true,
    },
    onFirstDataRendered: (params: FirstDataRenderedEvent) => {
      params.api.sizeColumnsToFit();
    },
  };
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
