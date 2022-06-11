import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { AlarmModel } from '../../shared/models/alarm.model';

@Component({
  selector: 'p-plant-alarms-grid',
  templateUrl: './alarms-grid.component.html',
  styleUrls: ['./alarms-grid.component.scss'],
})
export class AlarmsGridComponent implements OnInit, OnChanges {
  @ViewChild('grid') grid: AgGridAngular;
  @Input('data') data: Array<AlarmModel>;

  gridApi: GridReadyEvent;
  columnDefs: Array<ColDef> = [
    {
      field: 'Time',
      headerName: 'Time',
      // flex: 1,
      maxWidth: 87,
      minWidth: 87,
    },
    { field: 'Alarm', headerName: 'Alarm', flex: 1, minWidth: 200 },
    // {
    //   field: 'IsActive',
    //   headerName: 'Is Active',
    //   flex: 1,
    //   minWidth: 120,
    //   cellRendererSelector: function (params: ICellRendererParams) {
    //     return { component: IsactiveCellComponent };
    //   },
    // },
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
