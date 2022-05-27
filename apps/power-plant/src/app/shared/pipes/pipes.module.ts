import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongTextCutterPipe } from './long-text-cutter.pipe';
import { ReplaceUnderlinePipe } from './replace-underline.pipe';

const PIPES = [LongTextCutterPipe, ReplaceUnderlinePipe];

@NgModule({
  declarations: [...PIPES],
  imports: [CommonModule],
  exports: [...PIPES],
  providers: [...PIPES],
})
export class PipesModule {}
