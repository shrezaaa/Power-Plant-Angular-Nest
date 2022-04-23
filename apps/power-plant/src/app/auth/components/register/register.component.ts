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
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  pending = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService // private userSrv: UserService, // private alertSrv: AlertService
  ) {}

  ngOnInit(): void {}

  onRegister() {
    if (this.forms.valid) {
      // this.pending = true;
      // this.forms.disable();
      this.loginRef$ = this.authService
        .signUp(this.forms.value)
        .subscribe((res: any) => {
          this.alertService.showToaster('Successful SignUp', 'SUCCESS');
          this.onRedirectToLogin();
          this.pending = false;
          this.forms.enable();
        });
      // this.loginRef$ = this.userSrv
      //   .register({ ...this.forms.value, role: 'S', password2: undefined })
      //   .subscribe(
      //     (response) => {
      //       this.alertSrv.showToaster('user created Successfully!', 'SUCCESS');
      //       this.router.navigate(['/auth/login']);
      //       this.pending = false;
      //       this.forms.enable();
      //     },
      //     (error) => {
      //       this.alertSrv.showToaster(
      //         'please enter valid information',
      //         'DANGER'
      //       );
      //       this.pending = false;
      //       this.forms.enable();
      //     }
      //   );
    }
  }

  onRedirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

  onCancelRequest() {
    if (this.pending) {
      this.pending = false;
      this.forms.enable();
      this.loginRef$.unsubscribe();
    }
  }
}
