import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';
import { UnitRoutingModule } from './unit.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  // NgxMatDatePicker
} from '@angular-material-components/datetime-picker';
import { InvUnitTableComponent } from './components/unit-item-components/inv-unit-table/inv-unit-table.component';
import { AgGridModule } from 'ag-grid-angular';
// import { AgGridModule } from 'ag-grid-enterprise';
import { UnitPowerChartComponent } from './components/unit-item-components/unit-power-chart/unit-power-chart.component';
import { UnitYieldChartComponent } from './components/unit-item-components/unit-yield-chart/unit-yield-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CustomCellComponent } from './components/test-grid/custom-cell/custom-cell.component';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { UnitPageComponent } from './components/unit-page/unit-page.component';
import { UnitSelectionComponent } from './components/unit-page/unit-selection/unit-selection.component';
import { InvDataAnalysisComponent } from './components/unit-page/inv-data-analysis/inv-data-analysis.component';
// import 'ag-grid-enterprise';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
];
@NgModule({
  declarations: [
    UnitRoutingComponent,
    InvUnitTableComponent,
    UnitPowerChartComponent,
    UnitYieldChartComponent,
    CustomCellComponent,
    TestGridComponent,
    UnitPageComponent,
    UnitSelectionComponent,
    InvDataAnalysisComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    matModules,
    UnitRoutingModule,
    SharedModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    AgGridModule.withComponents([]),
  ],
  providers: [MatDatepickerModule],
})
export class UnitModule {}
