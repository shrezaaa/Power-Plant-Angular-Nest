import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { YieldTrendChart } from '../../shared/models/yield-trend.model';
@Component({
  selector: 'p-plant-yield-trend-chart',
  templateUrl: './yield-trend-chart.component.html',
  styleUrls: ['./yield-trend-chart.component.scss'],
})
export class YieldTrendChartComponent implements OnInit, OnChanges {
  @Input('data') data: YieldTrendChart;
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3', '#F08300'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initData(changes.data.currentValue);
    }
  }

  ngOnInit(): void {
    this.initTwoSeriesChartOptions([], [], []);
  }

  initData(data: YieldTrendChart) {
    if (data.mode == 1) {
      this.initTwoSeriesChartOptions(
        data.categories,
        data.currentPowerSeries,
        data.dayPowerSeries
      );
    } else if ([2, 3].includes(data.mode)) {
      this.initOneSeriesChartOptions(data.categories, data.dayPowerSeries);
    }

    this.chartInstance?.hideLoading();
  }

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
    this.chartInstanceChange.emit($event);
    if (!this.data) this.chartInstance.showLoading();
  }

  initTwoSeriesChartOptions(
    categories = [],
    powerSeries = [],
    yieldSeries = []
  ) {
    this.chartOption = {
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
        axisLabel: {
          show: true,
          // interval: 0,
          rotate: 0,
        },
        data: categories,
      },
      yAxis: [
        {
          type: 'value',
          name: 'Power (kW)',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: this.colors[1],
            },
          },
          axisLabel: {
            formatter: '{value} kW',
          },
        },
        {
          type: 'value',
          name: 'Today Yield (kWh)',
          position: 'right',
          alignTicks: true,
          // offset: 80,
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
      ],
      series: [
        {
          name: 'Today Yield',
          type: 'bar',
          yAxisIndex: 1,
          data: yieldSeries,
        },
        {
          name: 'Power',
          type: 'line',
          smooth: true,
          // yAxisIndex: 1,
          data: powerSeries,
        },
      ],
    };
  }

  initOneSeriesChartOptions(categories = [], yieldSeries = []) {
    this.chartOption = {
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
        axisLabel: {
          show: true,
          // interval: 0,
          rotate: 0,
        },
        data: categories,
      },
      yAxis: {
        type: 'value',
        name: 'Today Yield (kWh)',
        position: 'left',
        alignTicks: true,
        // offset: 80,
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
      series: {
        name: 'Today Yield',
        type: 'bar',
        // yAxisIndex: 0,
        data: yieldSeries,
      },
    };
  }
}
