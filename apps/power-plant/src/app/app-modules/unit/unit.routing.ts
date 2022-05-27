import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestGridComponent } from './components/test-grid/test-grid.component';
import { UnitPageComponent } from './components/unit-page/unit-page.component';
import { UnitRoutingComponent } from './unit-routing/unit-routing.component';

const routes: Routes = [
  {
    path: '',
    component: UnitRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'units-analysis/:deviceTypeID',
        component: UnitPageComponent,
      },
      {
        path: 'units-analysis',
        component: UnitPageComponent,
      },
      {
        path: 'test',
        component: TestGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitRoutingModule {}
