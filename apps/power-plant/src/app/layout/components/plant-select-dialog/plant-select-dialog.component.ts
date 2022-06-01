import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { PlantModel } from '../../../app-modules/plants/shared/models/plant.model';
import { PlantsService } from '../../../app-modules/plants/shared/services/plants.service';

@Component({
  selector: 'p-plant-plant-select-dialog',
  templateUrl: './plant-select-dialog.component.html',
  styleUrls: ['./plant-select-dialog.component.scss'],
})
export class PlantSelectDialogComponent implements OnInit {
  selectionPlants: Array<PlantModel> = [];
  selectionLoading: boolean = false;
  selectedPlant: PlantModel;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>,
    private readonly fb: FormBuilder,
    private plantsService: PlantsService
  ) {}

  form = this.fb.group({
    PlantName: null,
  });

  ngOnInit(): void {
    this.getPlantSelectionData();
  }

  getPlantSelectionData(firstLoad?: boolean) {
    if (firstLoad) this.selectionLoading = true;
    this.plantsService
      .getPlants(!firstLoad ? this.form.value : {}, false)
      .pipe(
        map((res) => {
          return res.map((el) => new PlantModel(el));
        })
      )
      .subscribe((value) => {
        this.selectionLoading = false;
        this.selectionPlants = [{ PlantID: null, PlantName: 'All' }, ...value];
      });
  }

  onSelectPlant($event){
    console.log($event);
    this.selectedPlant=$event
  }

  onSubmit() {
    this.dialogRef.close(this.selectedPlant);
  }
}
