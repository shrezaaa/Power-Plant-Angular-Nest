import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'p-plant-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private loginRef$!: Subscription;
  hide = true;
  forms = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    remember_me: new FormControl(false),
  });
  pending = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService // private userSrv: UserService, // private alertSrv: AlertService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    if (this.forms.valid) {
      this.pending = true;
      this.loginRef$ = this.authService.login(this.forms.value).subscribe({
        next: (response) => {
          this.userService.setUserByToken(response.accessToken);
          this.pending = false;
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          this.pending = false;
        },
      });
    }
  }

  onRedirectToRegister() {
    this.router.navigate(['/auth/register']);
  }

  onCancelRequest() {
    if (this.pending) {
      this.pending = false;
      this.forms.enable();
      this.loginRef$.unsubscribe();
    }
  }
}
