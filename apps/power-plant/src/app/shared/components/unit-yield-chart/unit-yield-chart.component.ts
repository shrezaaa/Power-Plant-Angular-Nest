import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { PowerChart } from '../../models/power-chart';

@Component({
  selector: 'p-plant-unit-yield-chart',
  templateUrl: './unit-yield-chart.component.html',
  styleUrls: ['./unit-yield-chart.component.scss'],
})
export class UnitYieldChartComponent implements OnInit, OnChanges {
  @Input('data') data: PowerChart;
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initChartOptions(this.data.categories, this.data.dayPowerSeries);
      this.chartInstance?.hideLoading();
    }
  }

  ngOnInit(): void {
    this.initChartOptions();
  }

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
    this.chartInstanceChange.emit($event);
    if (!this.data) this.chartInstance.showLoading();
  }

  initChartOptions(categories = [], series = []) {
    this.chartOption = {
      color: this.colors,
      title: {
        text: 'Today Yield (kWh)',
      },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value) => value + ' kWh',
        axisPointer: {
          type: 'cross',
        },
      },
      // legend: {
      //   data: ['Today Yield'],
      // },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        data: categories,
      },
      yAxis: {
        type: 'value',
        // name: 'Today Yield',
        position: 'left',
        alignTicks: true,
        offset: 0,
        axisLine: {
          show: true,
          lineStyle: {
            color: this.colors[0],
          },
        },
        axisLabel: {
          formatter: '{value} kWh',
        },
      },

      series: [
        {
          name: 'Today Yield',
          type: 'bar',
          // yAxisIndex: 0,
          data: series,
        },
      ],
    };
  }
}
