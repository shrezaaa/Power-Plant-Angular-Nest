import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  FirstDataRenderedEvent,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { CustomCellComponent } from './custom-cell/custom-cell.component';

@Component({
  selector: 'p-plant-test-grid',
  templateUrl: './test-grid.component.html',
  styleUrls: ['./test-grid.component.scss'],
})
export class TestGridComponent implements OnInit {
  @ViewChild('grid') grid: AgGridAngular;
  gridColumnApi;
  public pivotPanelShow = 'always';

  gridOptions: GridOptions = {
    columnDefs: [
      { field: 'make', flex: 1 },
      { field: 'model', flex: 1 },
      { field: 'price', flex: 1 },
      {
        field: 'test',
        cellRendererSelector: function (params: ICellRendererParams) {
          const myCustom = {
            component: CustomCellComponent,
          };
          if (params.data.test === 4) return myCustom;
          else return undefined;
        },
      },
    ],
    animateRows: true,
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    onFirstDataRendered: (params: FirstDataRenderedEvent) => {},
    // loading
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          minWidth: 225,
          maxWidth: 225,
          width: 225,
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
          minWidth: 180,
          maxWidth: 400,
          width: 250,
        },
      ],
    },
  };

  rowData = [
    { test: 4, make: 'Toyota', model: 'Celica', price: 35000 },
    { test: 4, make: 'Ford', model: 'Mondeo', price: 32000 },
    { test: 4, make: 'Ford', model: 'Mondeo', price: 32000 },
    { test: 5, make: 'Ford', model: 'Mondeo', price: 32000 },
    { test: 4, make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
  constructor() {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridColumnApi = params.columnApi;
  }
}
