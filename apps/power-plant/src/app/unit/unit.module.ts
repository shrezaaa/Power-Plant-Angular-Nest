import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';
import { InvertorUnitsComponent } from './components/invertor-units/invertor-units.component';
import { UnitRoutingModule } from './unit.routing';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const matModules = [MatFormFieldModule, MatInputModule];
@NgModule({
  declarations: [UnitRoutingComponent, InvertorUnitsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    matModules,
    UnitRoutingModule,
    SharedModule
  ],
})
export class UnitModule {}
