import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ECharts } from 'echarts';
import { debounceTime, map } from 'rxjs';
import { PlantModel } from '../../shared/models/plant.model';
import { PlantsService } from '../../shared/services/plants.service';

@Component({
  selector: 'p-plant-plant-unit',
  templateUrl: './plant-unit.component.html',
  styleUrls: ['./plant-unit.component.scss'],
})
export class PlantUnitComponent implements OnInit {
  selectedPlant: any;
  selectedPlantID: number;
  allPlants: Array<PlantModel> = [];
  selectionPlants: Array<PlantModel> = [];
  plantSelectionForm = this.fb.group({
    PlantName: null,
  });
  selectionLoading: boolean = false;

  unitPowerChartInstance: ECharts;
  unitYieldChartInstance: ECharts;
  PowerChartData = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly plantsService: PlantsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPlantSelectionData(true);
    this.plantSelectionForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((res) => {
        this.getPlantSelectionData(false);
      });
  }

  getData() {}

  routeToInverterUnitsPage() {
    this.router.navigate(['unit/units-analysis/2'], {
      queryParams: {
        PlantID: this.selectedPlantID,
      },
    });
  }

  getPlantSelectionData(firstLoad?: boolean) {
    if (firstLoad) this.selectionLoading = true;
    this.plantsService
      .getPlants(this.plantSelectionForm.value)
      .pipe(
        map((res) => {
          return res.map((el) => new PlantModel(el));
        })
      )
      .subscribe((value: Array<PlantModel>) => {
        this.selectionLoading = false;
        this.selectionPlants = value;
        this.cdr.detectChanges();
        //todo: refactor needed
        const { id } = this.route.snapshot.params;
        this.selectedPlantID = id;
      });
  }

  onSelectPlant(event: PlantModel) {
    this.selectedPlantID = event.PlantID;
    this.router.navigate([`../${event.PlantID}`], {
      relativeTo: this.route,
      replaceUrl: true,
    });
  }
}
