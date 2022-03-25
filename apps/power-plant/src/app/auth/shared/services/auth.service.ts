import { Injectable, Injector } from '@angular/core';
import { BaseHttp } from '../../../core/services/base-http.service';
import { GlobalService } from '../../../core/services/global.service';
import { ApiRequest } from '../../../core/services/request.service';
// import { ApiRequest as ap2 } from '../../../core/services/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private gs: GlobalService,
    private injector: Injector,
    private api56: BaseHttp
  ) {}

  signUp(model) {
    return ApiRequest('POST', true)
      .controller('auth')
      .action('signup')
      .addBodies(model)
      .call(this.gs);
  }

  login(model) {
    // return ApiRequest('POST', true)
    //   .controller('auth')
    //   .action('signin')
    //   .addBodies(model)
    //   .call(this.gs);

    return this.api56
      .request('POST', 'auth/signin')
      .setBodyParams(model)
      .call();
  }
}
