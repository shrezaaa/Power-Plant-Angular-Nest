import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurveRoutingComponent } from './curve-routing/curve-routing.component';
import { CurveRoutingModule } from './curve.routing';
import { CurePageComponent } from './components/cure-page/cure-page.component';

@NgModule({
  declarations: [CurveRoutingComponent, CurePageComponent],
  imports: [CommonModule, CurveRoutingModule],
})
export class CurveModule {}
