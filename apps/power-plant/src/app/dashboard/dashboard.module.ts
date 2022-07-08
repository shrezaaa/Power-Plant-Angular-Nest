import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingComponent } from './dashboard-routing/dashboard-routing.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { YieldTrendChartComponent } from './components/yield-trend-chart/yield-trend-chart.component';
import { StatisticsChartComponent } from './components/statistics-chart/statistics-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    DashboardRoutingComponent,
    MainDashboardComponent,
    YieldTrendChartComponent,
    StatisticsChartComponent,
    TemperatureChartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    AgGridModule.withComponents([]),
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ],
})
export class DashboardModule {}
