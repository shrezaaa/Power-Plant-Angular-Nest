import { Component, OnInit } from '@angular/core';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { map } from 'rxjs';
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
  constructor(private readonly plantsService: PlantsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.plantsService
      .getPlants({})
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
