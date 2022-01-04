import { Router } from '@angular/router';
import { LoginResponse } from './../models/login-response';
import { HttpClient } from '@angular/common/http';
import { Base } from './../shared/http/base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends Base {
  
  protected override _baseUrl: string = 'auth/';
  constructor(private h: HttpClient, private router: Router) {
    super();
    this.httpClient = h;
  }

  login(username: string, password: string){
    return this.http.post<LoginResponse>(this.endPoint + "login", {
      username: username,
      password: password
    },{
      headers: this.guestHeaders,
      observe: 'body'
    });
  }

  checkAuthentication() {
    console.log("CHECK");
    
    if(this.isLogIn()){
      const user = this.getUser();
      console.log(user.model_type);
      
      if(user == null){
        this.logout();
        this.router.navigate(['/auth/login']);
      }else{
        this.router.navigate(['/' + user.model_type.toLowerCase() ])
      }
    }
  }
}
