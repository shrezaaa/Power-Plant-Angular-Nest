import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  [KEY: string]: any;
};

@Component({
  selector: 'p-plant-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public apexChartOptions: Partial<ChartOptions>;

  chartOption: EChartsOption = {
    title: {
      left: 'center',
      top: 'center',
    },
    legend: {
      orient: 'vertical',
      left:0,
      data: ['Online', 'Offline']
    },
    series: [
      {
        type: 'pie',
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
          // emphasis: {
          //   show: true
          // }
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold'
          }
        },
        data: [
          {
            value: 2,
            name: 'Offline',
          },
          {
            value: 2,
            name: 'Online',
          },
        ],
        radius: ['70%', '90%'],
      },
    ],
  };

  constructor() {
    this.apexChartOptions = {
      plotOptions: {
        pie: {
          customScale: 0.8,
        },
      },
      series: [50, 50],
      chart: {
        type: 'donut',
      },
      labels: ['Online', 'Offline'],
      responsive: [
        {
          breakpoint: 200,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
