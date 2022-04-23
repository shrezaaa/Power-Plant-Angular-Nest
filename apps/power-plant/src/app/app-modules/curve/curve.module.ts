import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurveRoutingComponent } from './curve-routing/curve-routing.component';
import { CurveRoutingModule } from './curve.routing';

@NgModule({
  declarations: [CurveRoutingComponent],
  imports: [CommonModule, CurveRoutingModule],
})
export class CurveModule {}
