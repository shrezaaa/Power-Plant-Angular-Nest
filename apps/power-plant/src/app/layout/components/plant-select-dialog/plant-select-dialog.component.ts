import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { PlantModel } from '../../../app-modules/plants/shared/models/plant.model';
import { PlantsService } from '../../../app-modules/plants/shared/services/plants.service';
import { SharedService } from '../../../shared/services/shared.service';

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
    public sharedService: SharedService
  ) {}

  form = this.fb.group({
    PlantName: null,
  });

  ngOnInit(): void {
    this.getPlantSelectionData();
  }

  getPlantSelectionData() {
    if (!this.sharedService.plants$.value.length) this.selectionLoading = true;
    this.sharedService
      .getPlants(this.form.value)
      .subscribe((value) => {
        this.selectionLoading = false;
      });
  }

  onSelectPlant($event) {
    console.log($event);
    this.selectedPlant = $event;
  }

  onSubmit() {
    this.dialogRef.close(this.selectedPlant);
  }
}
