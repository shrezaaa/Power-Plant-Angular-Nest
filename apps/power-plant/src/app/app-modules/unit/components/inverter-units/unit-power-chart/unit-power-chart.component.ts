import { Component, OnInit } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';

@Component({
  selector: 'p-plant-unit-power-chart',
  templateUrl: './unit-power-chart.component.html',
  styleUrls: ['./unit-power-chart.component.scss'],
})
export class UnitPowerChartComponent implements OnInit {
  colors = ['#2196F3', '#F08300', '#91CC75', '#5470C6'];
  // myChart = echarts.init(document.getElementById('main'));

  chartInstance: ECharts;

  chartOption: EChartsOption = {
    // color: this.colors,
    title: {
      text: 'Current Power',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      right:20,
      data: ['A', 'B', 'C'],
    },
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      data: [
        '00:00',
        '00:30',
        '01:00',
        '01:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30',
        '04:00',
        '04:30',
        '05:00',
        '05:30',
        '06:00',
        '06:30',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
        '24:00',
        '24:30',
      ],
    },
    yAxis: {
      type: 'value',
      // name: 'Power',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: this.colors[0],
        },
      },
      axisLabel: {
        formatter: '{value} kW',
      },
    },

    series: [
      {
        name: 'A',
        type: 'line',
        // step:'middle',

        // smooth: true,
        color: this.colors[1],
        data: [4.2,4.5,4,4.7,5,4,5.2,5.7,5],
      },
      {
        name: 'B',
        type: 'line',
        // step:'middle',
        color: this.colors[2],
        // smooth: true,
        data: [3.2,3.5,3.6,3.8,0,0,3.8,3.4,3.2],
      },
      {
        name: 'C',
        type: 'line',
        // step:'middle',
        color: this.colors[3],
        // smooth: true,
        data: [2.1,2.2,2.5,2.9,2.7,2.6,2.4,2.5,2.32],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
  }
}