import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

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
  selector: 'p-plant-produced-power-chart',
  templateUrl: './produced-power-chart.component.html',
  styleUrls: ['./produced-power-chart.component.scss'],
})
export class ProducedPowerChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public apexChartOptions: Partial<ChartOptions>;

  chartOption: EChartsOption = {
    xAxis: {
      data:  [
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
        2020, 2021, 2022,
      ],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [20, 29, 37, 36, 44, 45, 50, 58, 20, 50, 70, 60, 70, 150],
      }
    ]
  };
  constructor() {
    this.apexChartOptions = {
      chart: {
        height: 200,
        // width: '100%',
        type: 'bar',
        stacked: false,
      },
      series: [
        {
          name: 'Plant 2',
          data: [20, 29, 37, 36, 44, 45, 50, 58, 20, 50, 70, 60, 70, 150],
        },
      ],
      xaxis: {
        categories: [
          2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
          2020, 2021, 2022,
        ],
      },
    };
  }

  ngOnInit(): void {}
}
