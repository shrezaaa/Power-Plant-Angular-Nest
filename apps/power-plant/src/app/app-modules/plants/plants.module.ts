import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';
import { PlantsListViewComponent } from './components/plants-list-view/plants-list-view.component';
import { PlantsRoutingModule } from './plants.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlantsMapComponent } from './components/plants-map-view/plants-map/plants-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '../../shared/shared.module';
import { PlantsMapViewComponent } from './components/plants-map-view/plants-map-view.component';

const matModules = [MatFormFieldModule, MatInputModule];
@NgModule({
  declarations: [
    PlantsRoutingComponent,
    PlantsListViewComponent,
    PlantsMapComponent,
    PlantsMapViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    matModules,
    PlantsRoutingModule,
    LeafletModule,
    SharedModule
  ],
})
export class PlantsModule {}