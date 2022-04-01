import { ClassProvider, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './core/guard/auth.guard';

const HTTP_AUTH_GUARD: ClassProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthGuard,
  multi: true,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [HTTP_AUTH_GUARD, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
