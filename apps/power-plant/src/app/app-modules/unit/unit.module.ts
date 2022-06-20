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
import { NgxEchartsModule } from 'ngx-echarts';
import { CustomCellComponent } from './components/test-grid/custom-cell/custom-cell.component';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import { SharedModule } from '../../shared/shared.module';
import { UnitPageComponent } from './components/unit-page/unit-page.component';
import { InvDataAnalysisComponent } from './components/unit-page/inv-data-analysis/inv-data-analysis.component';
import { MatSelectModule } from '@angular/material/select';
import { FooterAlarmsComponent } from './components/footer-alarms/footer-alarms.component';
// import 'ag-grid-enterprise';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  NgxMatDatetimePickerModule,
  MatSelectModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
];
@NgModule({
  declarations: [
    UnitRoutingComponent,
    InvUnitTableComponent,
    CustomCellComponent,
    TestGridComponent,
    UnitPageComponent,
    InvDataAnalysisComponent,
    FooterAlarmsComponent,
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
