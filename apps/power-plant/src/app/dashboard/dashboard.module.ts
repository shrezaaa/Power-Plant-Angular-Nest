import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingComponent } from './components/dashboard-routing/dashboard-routing.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProducedPowerChartComponent } from './components/produced-power-chart/produced-power-chart.component';
import { StatisticsChartComponent } from './components/statistics-chart/statistics-chart.component';


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
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
