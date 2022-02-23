import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { GlobalService } from './services/global.service';
import { ToastNotificationsModule } from './toast-notification';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastNotificationsModule],
  exports: [],
  providers: [AuthGuard, GlobalService],
})
export class CoreModule {}
