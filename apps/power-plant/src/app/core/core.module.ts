import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { GlobalService } from './services/global.service';
import { HttpsInterceptor } from './services/http.interceptor';
import { ToastNotificationsModule } from './toast-notification';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastNotificationsModule,ToastrModule.forRoot(),
  ],
  exports: [],
  providers: [
    AuthGuard,
    GlobalService,
    // ToastrService
    
  ],
})
export class CoreModule {}
