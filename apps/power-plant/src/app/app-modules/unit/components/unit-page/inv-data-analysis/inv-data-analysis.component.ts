import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from 'apps/power-plant/src/app/shared/services/shared.service';
import { ECharts } from 'echarts';
import { debounce, debounceTime } from 'rxjs';
import { PowerChart } from '../../../../../shared/models/power-chart';
import { InvSummary } from '../../../shared/models/inv-summary.model';
import { UnitService } from '../../../shared/services/unit.service';

@Component({
  selector: 'p-plant-inv-data-analysis',
  templateUrl: './inv-data-analysis.component.html',
  styleUrls: ['./inv-data-analysis.component.scss'],
})
export class InvDataAnalysisComponent implements OnInit, OnChanges {
  @Input('deviceTypeID') deviceTypeID = null;
  @Input('deviceID') deviceID = null;
  loading = false;
  filterForm = this.fb.group({
    DateTime: this.sharedService.currentDate,
    isNormalized: false,
  });

  unitPowerChartInstance: ECharts;
  unitYieldChartInstance: ECharts;
  PowerChartData: PowerChart = null;
  invSummaryData: InvSummary = null;
  constructor(
    private readonly fb: FormBuilder,
    private unitService: UnitService,
    private sharedService: SharedService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.deviceID && changes.deviceID.currentValue) {
      this.getData();
    }
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.pipe(debounceTime(400)).subscribe((res) => {
      this.getData();
    });
  }

  getData() {
    if (this.deviceID) {
      const { DateTime } = this.filterForm.value;
      this.unitPowerChartInstance?.showLoading();
      this.unitYieldChartInstance?.showLoading();
      this.loading = true;
      let model = {
        DateTime: new Date(DateTime).toLocaleDateString(),
        DeviceID: this.deviceID,
      };
      this.unitService.getInvAnalysisData(model).subscribe({
        next: (res) => {
          this.loading = false;
          this.PowerChartData = new PowerChart(res);
        },
        error: (err) => {
          this.loading = false;
        },
      });

      this.unitService.getInvSummaryData(model).subscribe({
        next: (res) => {
          console.log(res);
          this.invSummaryData = new InvSummary(res[0]);
        },
      });
    }
  }
}
