import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'apps/power-plant/src/app/core/alert/alert.service';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { debounceTime, map, take } from 'rxjs';
import { Unit } from '../../../unit/shared/models/unit.model';
import { UnitService } from '../../../unit/shared/services/unit.service';
import * as CurveConfig from '../../shared/configs/curve-column.config';
import { CurveDynamicChart } from '../../shared/models/curve-dynamic-chart.model';
import { CurveService } from '../../shared/services/curve.service';
import { CureDynamicChartComponent } from '../cure-dynamic-chart/cure-dynamic-chart.component';

@Component({
  selector: 'p-plant-cure-page',
  templateUrl: './cure-page.component.html',
  styleUrls: ['./cure-page.component.scss'],
})
export class CurePageComponent implements OnInit {
  @ViewChild('curveComponent') curveComponent: CureDynamicChartComponent;
  selectedUnit;
  units: Array<Unit> = [];
  selectedDeviceID: number = null;
  selectedDeviceTypeID: number = null;
  unitSelectionForm = this.fb.group({
    deviceTitle: null,
    deviceTypeID: 'All',
  });

  deviceTypes: Array<SelectData> = [
    { name: 'CombinerBox', value: 1 },
    { name: 'Inverter', value: 2 },
    { name: 'Wamp', value: 3 },
  ];

  curveTypes: Array<any> = [];

  filterForm = this.fb.group({
    DateTime: '2022-05-24',
    isNormalized: false,
    curveColumn: null,
  });

  curveData: CurveDynamicChart;

  constructor(
    private fb: FormBuilder,
    private unitService: UnitService,
    private curveService: CurveService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    // const { params } = this.route.snapshot;
    // let deviceTypeID = params.deviceTypeID ? +params.deviceTypeID : null;
    // if (deviceTypeID) {
    //   this.unitSelectionForm.get('deviceTypeID').setValue(deviceTypeID);
    // }
    this.getUnitSelections();
    this.unitSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(() => {
        this.getUnitSelections();
      });
    this.filterForm.valueChanges.pipe(debounceTime(400)).subscribe(() => {
      this.getCurveData();
    });
  }

  getUnitSelections() {
    this.unitService
      .getUnits({
        DeviceTypeID:
          this.unitSelectionForm.value.deviceTypeID != 'All'
            ? this.unitSelectionForm.value.deviceTypeID
            : null,
        DeviceName: this.unitSelectionForm.value.deviceTitle,
      })
      .pipe(
        take(1),
        map((res) => {
          return res.map((element) => new Unit(element));
        })
      )
      .subscribe((value) => {
        this.units = value;
      });
  }

  onSelectUnit(event) {
    this.selectedDeviceID = event.DeviceId;
    this.selectedDeviceTypeID = event.DeviceTypeId;
    this.fillCurveTypes(event.DeviceTypeId);
  }

  fillCurveTypes(deviceTypeID) {
    switch (+deviceTypeID) {
      case 1:
        this.curveTypes = CurveConfig.CombinerCurveColumns;
        break;

      case 2:
        this.curveTypes = CurveConfig.InverterCurveColumns;
        break;

      case 3:
        this.curveTypes = CurveConfig.WampCurveColumns;
        break;
    }
  }

  getCurveData() {
    if (this.selectedDeviceID) {
      let tempModel = this.filterForm.value;
      console.log(tempModel);
      if (tempModel.curveColumn) {
        this.curveComponent.chartInstance.showLoading();
        this.curveService
          .getCurveData({
            Date: new Date(tempModel.DateTime).toLocaleDateString(),
            Column: tempModel.curveColumn,
            DeviceID: this.selectedDeviceID,
            DeviceTypeID: this.selectedDeviceTypeID,
          })
          .pipe(
            take(1),
            map(
              (res) =>
                new CurveDynamicChart(this.filterForm.value.curveColumn, res)
            )
          )
          .subscribe((value) => {
            this.curveData = value;
          });
      } else {
        this.alertService.showToaster('Please Select Curve Type!', 'WARNING');
      }
    } else {
      this.alertService.showToaster('Please Select a Unit First!', 'WARNING');
    }
  }
}
