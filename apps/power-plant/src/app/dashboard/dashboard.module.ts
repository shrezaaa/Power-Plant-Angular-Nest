import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingComponent } from './components/dashboard-routing/dashboard-routing.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { ProducedPowerChartComponent } from './components/produced-power-chart/produced-power-chart.component';
import { StatisticsChartComponent } from './components/statistics-chart/statistics-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    DashboardRoutingComponent,
    MainDashboardComponent,
    ProducedPowerChartComponent,
    StatisticsChartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
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
