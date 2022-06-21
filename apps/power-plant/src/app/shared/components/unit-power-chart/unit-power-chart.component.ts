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
import { YieldTrendChart } from '../../../dashboard/shared/models/yield-trend.model';
import { PowerChart } from '../../models/power-chart';

@Component({
  selector: 'p-plant-unit-power-chart',
  templateUrl: './unit-power-chart.component.html',
  styleUrls: ['./unit-power-chart.component.scss'],
})
export class UnitPowerChartComponent implements OnInit, OnChanges {
  @Input('data') data: any;
  @Input('type') type: 'single-power' | 'multi-power' = 'multi-power';
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3', '#F08300', '#91CC75', '#5470C6'];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      if (this.type == 'multi-power') {
        this.initChartOptions(this.data.categories, [
          this.data.currentASeries,
          this.data.currentBSeries,
          this.data.currentCSeries,
        ]);
      } else {
        this.initChartOptions(this.data.categories, [
          this.data.currentPowerSeries,
        ]);
      }
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

  initChartOptions(categories = [], seriesData: Array<Array<any>> = [[]]) {
    let series;
    if (this.type == 'multi-power') {
      series = [
        {
          name: 'A',
          type: 'line',
          color: this.colors[1],
          data: seriesData[0],
        },
        {
          name: 'B',
          type: 'line',
          color: this.colors[2],
          data: seriesData[1],
        },
        {
          name: 'C',
          type: 'line',
          color: this.colors[3],
          data: seriesData[2],
        },
      ];
    } else {
      series = {
        name: 'Power',
        type: 'line',
        color: this.colors[1],
        data: seriesData[0],
      };
    }
    this.chartOption = {
      // color: this.colors,
      title: {
        text: this.type == 'multi-power' ? 'Current Power (kW)' : 'Power (kW)',
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

      series: series,
    };
  }
}
