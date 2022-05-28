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
import { PlantSelectDialogComponent } from './components/plant-select-dialog/plant-select-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const matModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    LoadingBarComponent,
    TopNavbarComponent,
    PageNotFoundComponent,
    PlantSelectDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutRoutingModule,
    matModules,
    SharedModule,
  ],
})
export class LayoutModule {}
