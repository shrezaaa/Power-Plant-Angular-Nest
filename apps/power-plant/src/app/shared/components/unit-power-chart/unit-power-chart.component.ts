import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { TemperatureChart } from 'apps/power-plant/src/app/dashboard/shared/models/temperature-chart.model';
import { ECharts, EChartsOption } from 'echarts';
import { PowerChart } from '../../models/power-chart';

@Component({
  selector: 'p-plant-unit-power-chart',
  templateUrl: './unit-power-chart.component.html',
  styleUrls: ['./unit-power-chart.component.scss'],
})
export class UnitPowerChartComponent implements OnInit, OnChanges {
  @Input('data') data: PowerChart;
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3', '#F08300', '#91CC75', '#5470C6'];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initChartOptions(
        this.data.categories,
        this.data.currentASeries,
        this.data.currentBSeries,
        this.data.currentCSeries
      );
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

  initChartOptions(categories = [], seriesA = [], seriesB = [], seriesC = []) {
    this.chartOption = {
      // color: this.colors,
      title: {
        text: 'Current Power (kW)',
      },
      tooltip: {
        trigger: 'axis',
        valueFormatter: (value) => value + ' kW',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        right: 20,
        data: ['A', 'B', 'C'],
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
          data: seriesA,
        },
        {
          name: 'B',
          type: 'line',
          // step:'middle',
          color: this.colors[2],
          // smooth: true,
          data: seriesB,
        },
        {
          name: 'C',
          type: 'line',
          // step:'middle',
          color: this.colors[3],
          // smooth: true,
          data: seriesC,
        },
      ],
    };
  }
}
