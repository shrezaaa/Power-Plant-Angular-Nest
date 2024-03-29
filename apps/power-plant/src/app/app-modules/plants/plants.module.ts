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
import { MatSelectModule } from '@angular/material/select';
import { PlantsGridComponent } from './components/plants-list-view/plants-grid/plants-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { AlarmCellComponent } from './components/plants-list-view/plants-grid/alarm-cell/alarm-cell.component';
import { AgmCoreModule } from '@agm/core';
import { ActionCellComponent } from './components/plants-list-view/plants-grid/action-cell/action-cell.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IsactiveCellComponent } from './components/plants-list-view/plants-grid/isactive-cell/isactive-cell.component';
import { PlantUnitComponent } from './components/plant-unit/plant-unit.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

const matModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatDatepickerModule,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  MatCheckboxModule
];
@NgModule({
  declarations: [
    PlantsRoutingComponent,
    PlantsListViewComponent,
    PlantsMapComponent,
    PlantsMapViewComponent,
    PlantsGridComponent,
    AlarmCellComponent,
    ActionCellComponent,
    IsactiveCellComponent,
    PlantUnitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    matModules,
    PlantsRoutingModule,
    LeafletModule,
    AgmCoreModule.forRoot({
      // apiKey: 'Api-key',
    }),
    AgGridModule.withComponents([]),
    SharedModule,
  ],
})
export class PlantsModule {}
