import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ECharts } from 'echarts';
import { TemperatureChart } from '../../shared/models/temperature-chart.model';
import { YieldTrendChart } from '../../shared/models/yield-trend.model';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  currentDate = new Date('2022-05-24').toLocaleDateString();
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

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getYieldTrendData();
    this.getTemperatureChartData();
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

  changeProducePowerMode(item) {
    if (this.activeYieldTrendModeID != item.id) {
      this.activeYieldTrendModeID = item.id;
      this.getYieldTrendData();
    }
  }
}
