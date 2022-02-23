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

const matModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule,
];

@NgModule({
  declarations: [LayoutComponent, LoadingBarComponent, TopNavbarComponent],
  imports: [CommonModule, LayoutRoutingModule, matModules],
})
export class LayoutModule {}
