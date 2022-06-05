import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurePageComponent } from './components/cure-page/cure-page.component';
import { CurveRoutingComponent } from './curve-routing/curve-routing.component';

const routes: Routes = [
  {
    path: '',
    component: CurveRoutingComponent,
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'page', component: CurePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurveRoutingModule {}
