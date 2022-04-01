import { Injectable, ErrorHandler } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (this.router.url !== '/auth/login' && err.status === 401) {
              this.router.navigate(['/auth/login']);
            }
            this.errorHandler.handleError(err);
          }
        }
      )
    );
  }

  constructor(private router: Router, public errorHandler: ErrorHandler) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let Token = localStorage.getItem('Token');
    if (Token) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
