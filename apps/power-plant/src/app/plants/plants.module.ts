import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantsRoutingModule } from './plants.routing';
import { PlantsFilterComponent } from './components/plants-filter/plants-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlantsMapComponent } from './components/plants-map/plants-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '../shared/shared.module';

const matModules = [MatFormFieldModule, MatInputModule];
@NgModule({
  declarations: [
    PlantsRoutingComponent,
    PlantsListComponent,
    PlantsComponent,
    PlantsFilterComponent,
    PlantsMapComponent,
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
