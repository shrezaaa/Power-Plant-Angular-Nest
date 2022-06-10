import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { SharedService } from 'apps/power-plant/src/app/shared/services/shared.service';
import { PlantModel } from '../../../../shared/models/plant.model';

@Component({
  selector: 'p-plant-action-cell',
  templateUrl: './action-cell.component.html',
  styleUrls: ['./action-cell.component.scss'],
})
export class ActionCellComponent implements OnInit, ICellRendererAngularComp {
  params: ICellRendererParams;
  field: string;
  rowData: PlantModel;
  cellData: any;
  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  agInit(params: ICellRendererParams): void {
    console.log(params);
    this.field = params.colDef.field;
    this.rowData = params.data;
    this.cellData = params.data[this.field];
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }

  openPlantMap(PlantID: number) {
    this.router.navigate([`plants/map`], { queryParams: { id: PlantID } });
  }

  routeToPlantUnit(PlantID: number) {
    this.router.navigate([`plants/list/${PlantID}`]);
  }

  onSetAsCurrent(plant: PlantModel) {
    this.sharedService.setSelectedPlant(plant);
  }
}
