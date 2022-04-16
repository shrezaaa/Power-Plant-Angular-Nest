import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MAT_MODULES = [MatIconModule, MatButtonModule];

const COMPONENTS = [];

const MODULES = [];

const DIRECTIVES = [];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MAT_MODULES, ...MODULES, CommonModule],
  exports: [...MAT_MODULES, ...COMPONENTS, ...DIRECTIVES, ...MODULES],
  providers: [],
})
export class SharedModule {}
