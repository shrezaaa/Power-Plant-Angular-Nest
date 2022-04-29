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
  producePowerModes = [
    { id: 1, name: 'Day' },
    { id: 2, name: 'Month' },
    { id: 3, name: 'Year' },
  ];
  activeProducePowerModeID = 1;

  yieldChartInstance: ECharts;
  yieldTrendChartData = null;

  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.yieldChartInstance?.showLoading();
    this.dashboardService.getYieldTrend({}).subscribe((value) => {
      if (value) {
        this.yieldTrendChartData = new YieldTrendChart(value);
      }
    });
  }

  changeProducePowerMode(item) {
    this.activeProducePowerModeID = item.id;
  }
}
