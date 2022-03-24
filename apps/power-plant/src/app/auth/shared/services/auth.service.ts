import { Injectable } from '@angular/core';
import { GlobalService } from '../../../core/services/global.service';
import { ApiRequest } from '../../../core/services/request.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private gs: GlobalService) {}

  signUp(model) {
    return ApiRequest('POST', true)
      .controller('auth')
      .action('signup')
      .addBodies(model)
      .call(this.gs);
  }
}
