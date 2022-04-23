import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsListViewComponent } from './components/plants-list-view/plants-list-view.component';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: '',
        component: PlantsListViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsRoutingModule {}
