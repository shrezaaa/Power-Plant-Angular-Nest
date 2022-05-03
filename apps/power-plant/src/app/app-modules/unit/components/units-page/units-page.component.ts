import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { UnitService } from '../../shared/services/unit.service';

@Component({
  selector: 'p-plant-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss'],
})
export class UnitsPageComponent implements OnInit {
  units: Array<SelectData> = [];
  deviceTypeID: number = null;
  constructor(
    private unitService: UnitService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { params } = this.route.snapshot;
    this.deviceTypeID = params.deviceTypeID ?? null;
    this.getUnitSelections();
  }

  onSelectUnit(event) {
    console.log(event);
  }

  getUnitSelections() {
    this.unitService
      .getUnits({ DeviceTypeID: this.deviceTypeID })
      .subscribe((value) => {
        this.units = value;
      });
  }
}
