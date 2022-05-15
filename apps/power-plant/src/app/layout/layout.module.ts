import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const matModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatMenuModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    LoadingBarComponent,
    TopNavbarComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, LayoutRoutingModule, matModules, SharedModule],
})
export class LayoutModule {}
