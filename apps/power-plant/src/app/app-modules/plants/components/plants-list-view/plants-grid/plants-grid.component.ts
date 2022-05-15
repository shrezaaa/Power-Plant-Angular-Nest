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
import { AlarmCellComponent } from './alarm-cell/alarm-cell.component';

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
    { field: 'PlantName', headerName: 'Name.', flex: 1 },
    { field: 'NormalProduction', headerName: 'Normal Production', flex: 1 },
    { field: 'RealProduction', headerName: 'Real Production', flex: 1 },
    { field: 'Address', headerName: 'Address', flex: 1 },
    { field: 'Phone', headerName: 'Phone', flex: 1 },
    { field: 'IsActive', headerName: 'IsActive', flex: 1 },
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
