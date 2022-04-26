import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongTextCutterPipe } from './long-text-cutter.pipe';

const PIPES = [LongTextCutterPipe];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES],
  providers: [...PIPES],
})
export class PipesModule {}
