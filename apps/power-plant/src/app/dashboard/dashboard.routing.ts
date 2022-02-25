import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingComponent } from './components/dashboard-routing/dashboard-routing.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardRoutingComponent,
    children: [
      // { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: '',
        component: MainDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
