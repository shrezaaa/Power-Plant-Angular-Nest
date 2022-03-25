import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'p-plant-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginRef$!: Subscription;
  hide = true;
  forms = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    remember_me: new FormControl(false),
  });
  pendding = false;

  constructor(
    private router: Router,
    private authService:AuthService,
    // private userSrv: UserService,
    // private alertSrv: AlertService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('Token')) {
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    if (this.forms.valid) {
      // this.pendding = true;
      // this.forms.disable();
      this.loginRef$ = this.authService.login(this.forms.value).subscribe(
        (response) => {
            console.log(response);
            
          
        
        },
        (error) => {
          this.pendding = false;
          this.forms.enable();
        },
        () => {}
      );
    }
  }

  onRedirectToRegister() {
    this.router.navigate(['/auth/register']);
  }

  onCancelRequest() {
    if (this.pendding) {
      this.pendding = false;
      this.forms.enable();
      this.loginRef$.unsubscribe();
    }
  }
}
