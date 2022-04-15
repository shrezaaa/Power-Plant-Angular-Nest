import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsRoutingComponent } from './plants-routing/plants-routing.component';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantsComponent } from './components/plants/plants.component';
import { PlantsRoutingModule } from './plants.routing';
import { PlantsFilterComponent } from './components/plants-filter/plants-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const matModules =[
  MatFormFieldModule,
  MatInputModule
]
@NgModule({
  declarations: [PlantsRoutingComponent, PlantsListComponent, PlantsComponent, PlantsFilterComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,matModules, PlantsRoutingModule],
})
export class PlantsModule {}
