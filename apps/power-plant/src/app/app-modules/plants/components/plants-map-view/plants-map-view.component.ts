import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SelectData } from 'apps/power-plant/src/app/shared/types/select-data';
import { debounceTime, map } from 'rxjs';
import { PlantModel } from '../../shared/models/plant.model';
import { PlantsService } from '../../shared/services/plants.service';

@Component({
  selector: 'p-plant-plants-map-view',
  templateUrl: './plants-map-view.component.html',
  styleUrls: ['./plants-map-view.component.scss'],
})
export class PlantsMapViewComponent implements OnInit {
  selectedPlant: SelectData;
  selectedPlantID: number;
  allPlants: Array<PlantModel> = [];
  selectionPlants: Array<PlantModel> = [];
  plantSelectionForm = this.fb.group({
    PlantName: null,
  });
  selectionLoading: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly plantsService: PlantsService
  ) {}

  ngOnInit(): void {
    this.getPlantSelectionData(true);
    this.plantSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((res) => {
        this.getPlantSelectionData(false);
      });
  }

  getPlantSelectionData(firstLoad?: boolean) {
    if(firstLoad)this.selectionLoading = true;
    this.plantsService
      .getPlants(!firstLoad ? this.plantSelectionForm.value : {})
      .pipe(
        map((res) => {
          return res.map((el) => new PlantModel(el));
        })
      )
      .subscribe((value) => {
        this.selectionLoading = false;
        if (firstLoad) this.allPlants = value;
        this.selectionPlants = value;
      });
  }

  onSelectPlant(event: PlantModel) {    
    this.selectedPlantID = event.PlantID;
  }
}
