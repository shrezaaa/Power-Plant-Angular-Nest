import { Component, OnInit } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { UnitService } from '../../shared/services/unit.service';

@Component({
  selector: 'p-plant-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss'],
})
export class UnitsPageComponent implements OnInit {
  units: Array<SelectData> = [];
  constructor(private unitService:UnitService) {}

  ngOnInit(): void {
    this.getUnitSelections()
  }

  onSelectUnit(event) {
    console.log(event);
  }

  getUnitSelections() {
    this.unitService.getUnits().subscribe((value)=>{
      this.units=value
    })
  }
}
