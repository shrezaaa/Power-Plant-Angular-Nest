import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'p-plant-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss'],
})
export class MainDashboardComponent implements OnInit {
  itemClasses =
    'w-full h-full bg-white bg-gradient-to-r rounded-lg flex flex-col items-center justify-around p-2 pt-14 shadow-md';
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      series: [
        {
          name: 'Plant 1',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6,5.6,1.2,10,12,9.3,4],
        },
        {
          name: 'Plant 2',
          data: [20, 29, 37, 36, 44, 45, 50, 58,20,50,70,60,70,150],
        },
      ],
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,2017,2018,2019,2020,2021,2022],
      },
    };
  }

  ngOnInit(): void {}
}