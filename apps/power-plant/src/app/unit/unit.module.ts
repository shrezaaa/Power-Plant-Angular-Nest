import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';
import { InvertorUnitsComponent } from './components/invertor-units/invertor-units.component';
import { UnitRoutingModule } from './unit.routing';

@NgModule({
  declarations: [UnitRoutingComponent, InvertorUnitsComponent],
  imports: [CommonModule, UnitRoutingModule],
})
export class UnitModule {}
