import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingComponent } from './report-routing/report-routing.component';
import { ReportRoutingModule } from './report.routing';

@NgModule({
  declarations: [ReportRoutingComponent],
  imports: [CommonModule, ReportRoutingModule],
})
export class ReportModule {}
