import { NzButtonModule } from 'ng-zorro-antd/button';
import { RegisterClientComponent } from './../../pages/auth/register-client/register-client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { RegisterComponent } from 'src/app/pages/auth/register/register.component';
import { RegisterCommercantComponent } from 'src/app/pages/auth/register-commercant/register-commercant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RegisterClientComponent,
    RegisterCommercantComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzButtonModule,NzNotificationModule
  ]
})
export class AuthModule { }
