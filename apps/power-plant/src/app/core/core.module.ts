import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BaseHttp } from './services/base-http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrModule.forRoot()],
  exports: [],
  providers: [AuthGuard, BaseHttp ],
})
export class CoreModule {}
