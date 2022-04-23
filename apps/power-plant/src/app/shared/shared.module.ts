import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListSelectionComponent } from './components/list-selection/list-selection.component';

const MAT_MODULES = [MatIconModule, MatButtonModule];

const COMPONENTS = [ListSelectionComponent];

const MODULES = [];

const DIRECTIVES = [];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ListSelectionComponent],
  imports: [...MAT_MODULES, ...MODULES, CommonModule],
  exports: [...MAT_MODULES, ...COMPONENTS, ...DIRECTIVES, ...MODULES],
  providers: [],
})
export class SharedModule {}
