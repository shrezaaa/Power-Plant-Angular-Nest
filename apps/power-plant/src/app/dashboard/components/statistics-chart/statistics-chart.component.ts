import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ECharts, EChartsOption } from 'echarts';
import { DashboardDataModel } from '../../shared/models/dashboard-data.model';

@Component({
  selector: 'p-plant-statistics-chart',
  templateUrl: './statistics-chart.component.html',
  styleUrls: ['./statistics-chart.component.scss'],
})
export class StatisticsChartComponent implements OnInit {
  @Input('data') data: DashboardDataModel;
  @Input('type') type: 'combiner' | 'inverter' | 'vamp';
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2dd184', '#f91e42'];

  offlineCount = 0;
  onlineCount = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      if (this.type == 'inverter') {
        this.offlineCount = this.data.offlineInvertersCount;
        this.onlineCount = this.data.onlineInvertersCount;
      } else if (this.type == 'combiner') {
        this.offlineCount = this.data.offlineCombinersCount;
        this.onlineCount = this.data.onlineCombinersCount;
      }

      this.initChartOptions(this.onlineCount, this.offlineCount);
      this.chartInstance?.hideLoading();
    }
  }

  ngOnInit(): void {
    console.log(this.type);
    this.initChartOptions();
  }

  onChartInit($event: ECharts) {
    this.chartInstance = $event;
    this.chartInstanceChange.emit($event);
    if (!this.data) this.chartInstance.showLoading();
  }

  initChartOptions(onlineCount: number = 0, offlineCount: number = 0) {
    this.chartOption = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '0',
        left: 'center',
      },
      series: [
        {
          name: 'Inverters Statistics',
          type: 'pie',
          radius: ['70%', '90%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 1,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: onlineCount,
              name: ``,
              itemStyle: { color: this.colors[0] },
            },
            {
              value: offlineCount,
              name: '',
              itemStyle: { color: this.colors[1] },
            },
          ],
        },
      ],
    };
  }
}
