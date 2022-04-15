import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantsRoutingModule } from './plants.routing';

@NgModule({
  declarations: [PlantsRoutingComponent, PlantsListComponent, PlantsComponent],
  imports: [CommonModule, PlantsRoutingModule],
})
export class PlantsModule {}
