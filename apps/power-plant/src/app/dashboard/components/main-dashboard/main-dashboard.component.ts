import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ECharts } from 'echarts';
import { YieldTrendChart } from '../../shared/models/yield-trend.model';
import { DashboardService } from '../../shared/services/dashboard.service';

@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  currentDate = new Date('2021-10-18').toLocaleDateString();
  activeYieldTrendModeID = 1;
  yieldTrendModes = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Month' },
    { id: 3, name: 'Year' },
  ];

  yieldChartInstance: ECharts;
  yieldTrendChartData = null;

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.getYieldTrendData();
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

  changeProducePowerMode(item) {
    if (this.activeYieldTrendModeID != item.id) {
      this.activeYieldTrendModeID = item.id;
      this.getYieldTrendData();
    }
  }
}
