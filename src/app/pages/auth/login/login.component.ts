import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/models/login-response';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isLoad = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.checkAuthentication();
    this.validateForm = this.fb.group({
      username: [
        null,
        [Validators.required],
      ],
      password: [
        null,
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  login() {
    console.log(this.validateForm.value);
    this.isLoad = true;
    this.authService
      .login(this.validateForm.value.username, this.validateForm.value.password)
      .subscribe({
        next: (response) => {
          this.loginSuccess(response);
          this.isLoad = false;
        },
        error: (errors) => {
          console.error(errors);
          this.isLoad = false;
        },
      });
  }

  private loginSuccess(response: LoginResponse) {
    this.authService.setToken(response.token);
    this.authService.setUser(response.user);
    this.router.navigate(['/' + response.user.model_type.toLowerCase() ])
  }
}
