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
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  // NgxMatDatePicker
} from '@angular-material-components/datetime-picker';
import { InvUnitTableComponent } from './components/inverter-units/inv-unit-table/inv-unit-table.component';
import { AgGridModule } from 'ag-grid-angular';



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
  declarations: [UnitRoutingComponent, InverterUnitsComponent, InvUnitTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    matModules,
    UnitRoutingModule,
    SharedModule,
    AgGridModule.withComponents([])
  ],
  providers: [MatDatepickerModule],
})
export class UnitModule {}
