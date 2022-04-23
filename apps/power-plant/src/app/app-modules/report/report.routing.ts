import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportRoutingComponent } from './report-routing/report-routing.component';

const routes: Routes = [
  {
    path: '',
    component: ReportRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
