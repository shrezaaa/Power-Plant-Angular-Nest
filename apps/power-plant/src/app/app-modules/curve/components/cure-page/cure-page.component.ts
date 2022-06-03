import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { debounceTime, map, take } from 'rxjs';
import { Unit } from '../../../unit/shared/models/unit.model';
import { UnitService } from '../../../unit/shared/services/unit.service';

@Component({
  selector: 'p-plant-cure-page',
  templateUrl: './cure-page.component.html',
  styleUrls: ['./cure-page.component.scss'],
})
export class CurePageComponent implements OnInit {
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

  constructor(private fb: FormBuilder, private unitService: UnitService) {}

  ngOnInit(): void {
    // const { params } = this.route.snapshot;
    // let deviceTypeID = params.deviceTypeID ? +params.deviceTypeID : null;
    // if (deviceTypeID) {
    //   this.unitSelectionForm.get('deviceTypeID').setValue(deviceTypeID);
    // }
    this.unitSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(() => {
        this.getUnitSelections();
      });
    this.getUnitSelections();
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
  }
}
