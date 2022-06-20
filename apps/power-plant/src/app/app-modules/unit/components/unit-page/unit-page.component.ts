import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'apps/power-plant/src/app/shared/services/shared.service';
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
    DeviceTitleEn: null,
    deviceTypeID: 'All',
    PlantID: 'All',
  });

  deviceTypeControlRef: FormControl = this.unitSelectionForm.get(
    'deviceTypeID'
  ) as FormControl;

  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.initDefaultValues();
    this.sharedService.getPlants({},true)
    this.unitSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe(() => {
        this.getUnitSelections();
      });
    this.getUnitSelections();
  }

  initDefaultValues() {
    const { deviceTypeID } = this.route.snapshot.params;
    const { PlantID } = this.route.snapshot.queryParams;
    if (PlantID) {
      this.sharedService.getPlants({}, true);
      this.unitSelectionForm.get('PlantID').setValue(+PlantID);
    }
    if (deviceTypeID) {
      this.unitSelectionForm.get('deviceTypeID').setValue(+deviceTypeID);
    }
  }

  onSelectUnit(event) {
    this.selectedDeviceID = event.DeviceId;
    this.selectedDeviceTypeID = event.DeviceTypeId;
  }

  updateRoute(deviceTypeID) {
    this.router.navigate([`../${deviceTypeID}`], {
      relativeTo: this.route,
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
        DeviceTitleEn: this.unitSelectionForm.value.DeviceTitleEn,
        PlantID:
          this.unitSelectionForm.value.PlantID != 'All'
            ? this.unitSelectionForm.value.PlantID
            : null,
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
