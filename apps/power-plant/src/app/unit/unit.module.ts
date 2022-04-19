import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';
import { InvertorUnitsComponent } from './components/invertor-units/invertor-units.component';



@NgModule({
  declarations: [
    UnitRoutingComponent,
    InvertorUnitsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UnitModule { }
