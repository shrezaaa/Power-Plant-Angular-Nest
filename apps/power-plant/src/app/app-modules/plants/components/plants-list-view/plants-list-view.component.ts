import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { debounceTime, map } from 'rxjs';
import { PlantModel } from '../../shared/models/plant.model';
import { PlantsService } from '../../shared/services/plants.service';

@Component({
  selector: 'p-plant-plants-list-view',
  templateUrl: './plants-list-view.component.html',
  styleUrls: ['./plants-list-view.component.scss'],
})
export class PlantsListViewComponent implements OnInit {
  alarmStatuses: Array<SelectData> = [
    { name: 'Normal', value: 1 },
    { name: 'Alarm', value: 2 },
    { name: 'Fault', value: 3 },
  ];
  gridData: Array<PlantModel> = null;
  form = this.fb.group({
    PlantName: null,
    InstalledPowerFrom: null,
    InstalledPowerTo: null,
  });
  constructor(
    private readonly fb: FormBuilder,
    private readonly plantsService: PlantsService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.form.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      this.getData();
    });
  }

  getData() {
    this.plantsService
      .getPlants(this.form.value)
      .pipe(
        map((res) => {
          return res.map((el) => new PlantModel(el));
        })
      )
      .subscribe((value) => {
        this.gridData = value;
      });
  }
}
