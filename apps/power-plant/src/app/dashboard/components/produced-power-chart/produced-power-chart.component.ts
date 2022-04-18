import { Component, OnInit, ViewChild } from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
@Component({
  selector: 'p-plant-produced-power-chart',
  templateUrl: './produced-power-chart.component.html',
  styleUrls: ['./produced-power-chart.component.scss'],
})
export class ProducedPowerChartComponent implements OnInit {
  colors = ['#2196F3', '#F08300'];
  // myChart = echarts.init(document.getElementById('main'));

  chartInstance: ECharts;

  chartOption: EChartsOption = {
    color: this.colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['Power', 'Today Yield'],
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
    yAxis: [
      {
        type: 'value',
        name: 'Power (kW)',
        position: 'right',
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
      {
        type: 'value',
        name: 'Today Yield (kWh)',
        position: 'left',
        alignTicks: true,
        // offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: this.colors[1],
          },
        },
        axisLabel: {
          formatter: '{value} kWh',
        },
      },
    ],
    series: [
      {
        name: 'Today Yield',
        type: 'bar',
        // yAxisIndex: 0,
        data: [null, null, null, null, 0, 1, 1.2, 2.2, 4.0, 4.1, 4.1, 5.4],
      },
      {
        name: 'Power',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: [null, null, null, null, 0, 0.8, 1, 2.1, 3.2, 3.9, 4.1, 5.4,0],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
  }
}
