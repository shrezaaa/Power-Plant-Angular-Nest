import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurveRoutingComponent } from './curve-routing/curve-routing.component';
import { CurveRoutingModule } from './curve.routing';
import { CurePageComponent } from './components/cure-page/cure-page.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CureDynamicChartComponent } from './components/cure-dynamic-chart/cure-dynamic-chart.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxEchartsModule } from 'ngx-echarts';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,

  NgxMatNativeDateModule,
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    CurveRoutingComponent,
    CurePageComponent,
    CureDynamicChartComponent,
  ],
  imports: [
    CommonModule,
    matModules,
    CurveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    SharedModule,
  ],
})
export class CurveModule {}
