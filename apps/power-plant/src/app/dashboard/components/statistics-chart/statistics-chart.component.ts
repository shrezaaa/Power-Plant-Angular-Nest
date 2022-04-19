import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'p-plant-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements OnInit {
  chartOption: EChartsOption = {
    title: {
      left: 'center',
      top: 'center',
    },
    legend: {
      orient: 'vertical',
      left: 0,
      data: ['Online', 'Offline'],
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
          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '15',
            fontWeight: 'bold',
          },
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

  constructor() {}

  ngOnInit(): void {}
}
