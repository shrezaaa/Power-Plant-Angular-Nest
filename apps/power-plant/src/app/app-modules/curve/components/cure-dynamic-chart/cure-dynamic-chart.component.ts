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
import { CurveDynamicChart } from '../../shared/models/curve-dynamic-chart.model';

@Component({
  selector: 'p-plant-cure-dynamic-chart',
  templateUrl: './cure-dynamic-chart.component.html',
  styleUrls: ['./cure-dynamic-chart.component.scss'],
})
export class CureDynamicChartComponent implements OnInit, OnChanges {
  @Input('data') data: CurveDynamicChart;
  @Input('title') title: string = '';
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();

  chartOption: EChartsOption = {};
  chartInstance: ECharts;
  colors = ['#2196F3'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initChartOptions(this.data.categories, this.data.dataSeries);
      this.chartInstance?.hideLoading();
    }
  }

  ngOnInit(): void {
    this.initChartOptions();
  }

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
    this.chartInstanceChange.emit($event);
    // if (!this.data) this.chartInstance.showLoading();
  }

  initChartOptions(categories = [], series = []) {
    let formatter = ''
    this.chartOption = {
      color: this.colors,
      title: {
        text: '--',
      },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value) => value + formatter,
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
          formatter: '{value} ' + formatter,
        },
      },

      series: [
        {
          name: '--',
          type: 'bar',
          // yAxisIndex: 0,
          data: series,
        },
      ],
    };
  }
}
