import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { take, map, debounceTime } from 'rxjs';
import { Unit } from '../../shared/models/unit.model';
import { UnitService } from '../../shared/services/unit.service';

@Component({
  selector: 'p-plant-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.scss'],
})
export class UnitPageComponent implements OnInit {
  selectedUnit;
  units: Array<Unit> = [];
  selectedDeviceID: number = null;
  selectedDeviceTypeID: number = null;
  unitSelectionForm = this.fb.group({
    deviceTitle: null,
    deviceTypeID: 'All',
  });

  deviceTypeControlRef: FormControl = this.unitSelectionForm.get(
    'deviceTypeID'
  ) as FormControl;

  deviceTypes: Array<SelectData> = [
    { name: 'CombinerBox', value: 1 },
    { name: 'Inverter', value: 2 },
    { name: 'Wamp', value: 3 },
  ];

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const { params } = this.route.snapshot;
    let deviceTypeID = params.deviceTypeID ? +params.deviceTypeID : null;
    if (deviceTypeID) {
      this.unitSelectionForm.get('deviceTypeID').setValue(deviceTypeID);
    }
    this.unitSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(() => {
        this.getUnitSelections();
      });
    this.getUnitSelections();
  }

  onSelectUnit(event) {
    this.selectedDeviceID = event.DeviceId;
    this.selectedDeviceTypeID = event.DeviceTypeId;
  }

  updateRoute(deviceTypeID){
    this.router.navigate([`../${deviceTypeID}`], {
      relativeTo:this.route,
      queryParams: this.route.snapshot.queryParams,
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
}
