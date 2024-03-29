import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  GridOptions,
  GridReadyEvent,
  ICellRendererParams,
} from 'ag-grid-community';
import { PlantModel } from '../../../shared/models/plant.model';
import { ActionCellComponent } from './action-cell/action-cell.component';
import { AlarmCellComponent } from './alarm-cell/alarm-cell.component';
import { IsactiveCellComponent } from './isactive-cell/isactive-cell.component';

@Component({
  selector: 'p-plant-plants-grid',
  templateUrl: './plants-grid.component.html',
  styleUrls: ['./plants-grid.component.scss'],
})
export class PlantsGridComponent implements OnInit, OnChanges {
  @ViewChild('grid') grid: AgGridAngular;
  @Input('data') data: Array<PlantModel>;

  gridApi: GridReadyEvent;
  columnDefs: Array<ColDef> = [
    { field: 'PlantName', headerName: 'Name.', flex: 1, minWidth: 130 },
    {
      field: 'InstalledPower',
      headerName: 'Installed Power',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'NormalProduction',
      headerName: 'Normal Production',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'RealProduction',
      headerName: 'Real Production',
      flex: 1,
      minWidth: 100,
    },
    { field: 'Address', headerName: 'Address', flex: 1, minWidth: 200 },
    { field: 'Phone', headerName: 'Phone', flex: 1, minWidth: 150 },
    {
      field: 'IsActive',
      headerName: 'Is Active',
      flex: 1,
      minWidth: 120,
      cellRendererSelector: function (params: ICellRendererParams) {
        return { component: IsactiveCellComponent };
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 240,
      cellRendererSelector: function (params: ICellRendererParams) {
        return { component: ActionCellComponent };
      },
    },
  ];
  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      filter: true,
    },
    animateRows: true,
  };
  rowData = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.rowData = this.data;
    }
  }

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params;
  }
}
