import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ECharts } from 'echarts';
import { map, mapTo, Observable } from 'rxjs';
import { SharedService } from '../../../shared/services/shared.service';
import { AlarmModel } from '../../shared/models/alarm.model';
import { DashboardDataModel } from '../../shared/models/dashboard-data.model';
import { TemperatureChart } from '../../shared/models/temperature-chart.model';
import { YieldTrendChart } from '../../shared/models/yield-trend.model';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  currentDate = new Date(this.sharedService.currentDate).toLocaleDateString();
  activeYieldTrendModeID = 1;
  yieldTrendModes = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Month' },
    { id: 3, name: 'Year' },
  ];

  yieldChartInstance: ECharts;
  yieldTrendChartData = null;

  temperatureChartInstance: ECharts;
  temperatureChartData = null;

  dashboardData: DashboardDataModel = new DashboardDataModel({});

  alarmData: Array<AlarmModel> = [];

  constructor(
    private readonly dashboardService: DashboardService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getYieldTrendData();
    this.getTemperatureChartData();
    this.getDashboardData();
    this.getAlarms();
  }

  getYieldTrendData() {
    this.yieldChartInstance?.showLoading();
    this.dashboardService
      .getYieldTrend({
        mode: this.activeYieldTrendModeID,
        date: this.currentDate,
      })
      .subscribe((value) => {
        if (value) {
          this.yieldTrendChartData = new YieldTrendChart(
            value,
            this.activeYieldTrendModeID
          );
        }
      });
  }

  getTemperatureChartData() {
    this.temperatureChartInstance?.showLoading();
    this.dashboardService
      .getTemperatureChart({
        date: this.currentDate,
      })
      .subscribe((value) => {
        if (value) {
          this.temperatureChartData = new TemperatureChart(value);
        }
      });
  }

  getDashboardData() {
    this.dashboardService
      .getDashboardData({ date: this.currentDate })
      .pipe(map((el) => new DashboardDataModel(el)))
      .subscribe((value) => (this.dashboardData = value));
  }

  getAlarms() {
    this.dashboardService
      .getAlarms({ date: this.currentDate })
      .pipe(map((res) => res.map((el) => new AlarmModel(el))))
      .subscribe((value) => {
        this.alarmData = value;
      });
  }

  changeProducePowerMode(item) {
    if (this.activeYieldTrendModeID != item.id) {
      this.activeYieldTrendModeID = item.id;
      this.getYieldTrendData();
    }
  }
}
