import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../../../core/alert/alert.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'p-plant-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private loginRef$!: Subscription;
  hidePass1 = true;
  hidePass2 = true;
  forms = new FormGroup({
    username: new FormControl('shrezaei', [Validators.required]),
    firstName: new FormControl('fahpsi', [Validators.required]),
    lastName: new FormControl('doje,', [Validators.required]),
    email: new FormControl('dfc@gvhjn.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('reza9210', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('reza9210', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  pendding = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService // private userSrv: UserService, // private alertSrv: AlertService
  ) {}

  ngOnInit(): void {}

  onRegister() {
    if (this.forms.valid) {
      // this.pendding = true;
      // this.forms.disable();
      this.loginRef$ = this.authService
        .signUp(this.forms.value)
        .subscribe((res: any) => {
          this.alertService.showToaster('Successful SignUp', 'SUCCESS');
          this.onRedirectToLogin();
          this.pendding = false;
          this.forms.enable();
        });
      // this.loginRef$ = this.userSrv
      //   .register({ ...this.forms.value, role: 'S', password2: undefined })
      //   .subscribe(
      //     (response) => {
      //       this.alertSrv.showToaster('user created Successfully!', 'SUCCESS');
      //       this.router.navigate(['/auth/login']);
      //       this.pendding = false;
      //       this.forms.enable();
      //     },
      //     (error) => {
      //       this.alertSrv.showToaster(
      //         'please enter valid information',
      //         'DANGER'
      //       );
      //       this.pendding = false;
      //       this.forms.enable();
      //     }
      //   );
    }
  }

  onRedirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

  onCancelRequest() {
    if (this.pendding) {
      this.pendding = false;
      this.forms.enable();
      this.loginRef$.unsubscribe();
    }
  }
}
