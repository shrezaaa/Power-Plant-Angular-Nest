import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';
import { InverterUnitsComponent } from './components/inverter-units/inverter-units.component';
import { UnitRoutingModule } from './unit.routing';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';

const matModules = [MatFormFieldModule, MatInputModule, MatDatepickerModule];
@NgModule({
  declarations: [UnitRoutingComponent, InverterUnitsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    matModules,
    UnitRoutingModule,
    SharedModule,
  ],
})
export class UnitModule {}
