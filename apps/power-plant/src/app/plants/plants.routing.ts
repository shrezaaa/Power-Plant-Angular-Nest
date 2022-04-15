import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: '',
        component: PlantsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsRoutingModule {}
