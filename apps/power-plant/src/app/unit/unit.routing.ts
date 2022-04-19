import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvertorUnitsComponent } from './components/invertor-units/invertor-units.component';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';

const routes: Routes = [
  {
    path: '',
    component: UnitRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'inv',
        component: InvertorUnitsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitRoutingModule {}
