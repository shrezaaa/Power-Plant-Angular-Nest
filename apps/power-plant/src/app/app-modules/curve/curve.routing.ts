import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurveRoutingComponent } from './curve-routing/curve-routing.component';

const routes: Routes = [
  {
    path: '',
    component: CurveRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurveRoutingModule {}
