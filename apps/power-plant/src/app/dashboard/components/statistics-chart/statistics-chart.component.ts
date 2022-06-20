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
  @Output('chartInstanceChange') chartInstanceChange =
    new EventEmitter<ECharts>();
  chartInstance: ECharts;
  chartOption: EChartsOption = {};
  colors = ['#2196F3', '#F08300'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.initChartOptions(
        this.data.onlineInvertersCount,
        this.data.offlineInvertersCount
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
          // emphasis: {
          //   label: {
          //     show: true,
          //     fontSize: '40',
          //     fontWeight: 'bold',
          //   },
          // },
          labelLine: {
            show: false,
          },
          data: [
            { value: onlineCount, name: `Online` },
            { value: offlineCount, name: 'Offline' },
          ],
        },
      ],
    };
  }
}
