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
  selector: 'p-plant-produced-power-chart',
  templateUrl: './produced-power-chart.component.html',
  styleUrls: ['./produced-power-chart.component.scss'],
})
export class ProducedPowerChartComponent implements OnInit, OnChanges {
  @Input('data') data: YieldTrendChart;
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  colors = ['#2196F3', '#F08300'];

  chartOption: EChartsOption = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initTwoSeriesChartOptions(
        this.data.categories,
        this.data.currentPowerSeries,
        this.data.todayYieldSeries
      );
      this.chartInstance?.hideLoading();
    }
  }

  ngOnInit(): void {
    this.initTwoSeriesChartOptions([], [], []);
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
          position: 'right',
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
      ],
      series: [
        {
          name: 'Today Yield',
          type: 'bar',
          // yAxisIndex: 0,
          data: yieldSeries,
        },
        {
          name: 'Power',
          type: 'line',
          smooth: true,
          yAxisIndex: 1,
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
