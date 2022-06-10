import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { TemperatureChart } from '../../shared/models/temperature-chart.model';

@Component({
  selector: 'p-plant-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss'],
})
export class TemperatureChartComponent implements OnInit, OnChanges {
  @Input('data') data: TemperatureChart;
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3', '#F08300'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initChartOptions(this.data.categories, this.data.currentTemperature);
      this.chartInstance?.hideLoading()
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        data: categories,
      },
      yAxis: {
        type: 'value',
        name: 'Temperature °C',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: this.colors[1],
          },
        },
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      series: {
        name: 'Temperature',
        type: 'line',
        // yAxisIndex:0,
        smooth: true,
        data: series,
      },
    };
  }
}
