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

const matModules = [MatFormFieldModule, MatInputModule, MatSelectModule];

@NgModule({
  declarations: [CurveRoutingComponent, CurePageComponent, CureDynamicChartComponent],
  imports: [
    CommonModule,
    matModules,
    CurveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CurveModule {}
