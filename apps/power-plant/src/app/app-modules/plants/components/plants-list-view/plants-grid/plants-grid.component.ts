import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { AlarmCellComponent } from './alarm-cell/alarm-cell.component';

@Component({
  selector: 'p-plant-plants-grid',
  templateUrl: './plants-grid.component.html',
  styleUrls: ['./plants-grid.component.scss'],
})
export class PlantsGridComponent implements OnInit {
  @ViewChild('grid') grid: AgGridAngular;
  gridApi: GridReadyEvent;
  columnDefs: Array<ColDef> = [
    { field: 'id', headerName: 'No.', width: 80 },
    { field: 'plant', flex: 1, headerName: 'Plant Name' },
    { field: 'Communication', flex: 1 },
    {
      field: 'Alarm',
      flex: 1,
      cellRendererSelector: function (params: ICellRendererParams) {
        const myCustom = {
          component: AlarmCellComponent,
        };
        if ([1, 2, 3].includes(params.data.Alarm)) return myCustom;
        else return undefined;
      },
    },
    { field: 'InstalledPower', flex: 1, headerName: 'Installed Power' },
  ];
  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    animateRows: true,
  };
  rowData = [
    {
      id: 1,
      plant: 'p1',
      Communication: 'Yes',
      Alarm: 1,
      InstalledPower: '12 kWh',
    },
    {
      id: 2,
      plant: 'Ford',
      Communication: 'No',
      Alarm: 2,
      InstalledPower: '12 kWh',
    },
    {
      id: 3,
      plant: 'p2',
      Communication: 'No',
      Alarm: 3,
      InstalledPower: '12 kWh',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params;
  }
}
