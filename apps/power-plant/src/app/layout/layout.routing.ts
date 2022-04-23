import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guard/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'plants',
        loadChildren: () =>
          import('../app-modules/plants/plants.module').then(
            (m) => m.PlantsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'unit',
        loadChildren: () =>
          import('../app-modules/unit/unit.module').then((m) => m.UnitModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../app-modules/report/report.module').then(
            (m) => m.ReportModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'curve',
        loadChildren: () =>
          import('../app-modules/curve/curve.module').then(
            (m) => m.CurveModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
