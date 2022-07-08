import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListSelectionComponent } from './components/list-selection/list-selection.component';
import { PipesModule } from './pipes/pipes.module';
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive';
import { DetailSectionComponent } from './components/detail-section/detail-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { UnitYieldChartComponent } from './components/unit-yield-chart/unit-yield-chart.component';
import { UnitPowerChartComponent } from './components/unit-power-chart/unit-power-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AlarmsGridComponent } from './components/alarms-grid/alarms-grid.component';
import { AgGridModule } from 'ag-grid-angular';

const MAT_MODULES = [MatIconModule, MatButtonModule, MatDividerModule];

const COMPONENTS = [
  ListSelectionComponent,
  DetailSectionComponent,
  UnitPowerChartComponent,
  UnitYieldChartComponent,
  AlarmsGridComponent,
];

const MODULES = [PipesModule];

const DIRECTIVES = [ClickStopPropagationDirective];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ListSelectionComponent],
  imports: [
    ...MAT_MODULES,
    ...MODULES,
    CommonModule,
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
  exports: [...MAT_MODULES, ...COMPONENTS, ...DIRECTIVES, ...MODULES],
  providers: [],
})
export class SharedModule {}
