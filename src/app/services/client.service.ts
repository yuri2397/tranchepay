import { Client } from './../models/client';
import { HttpClient } from '@angular/common/http';
import { Base } from './../shared/http/base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends Base {
  protected override _baseUrl = 'client/';
  constructor(private h: HttpClient) {
    super();
    this.httpClient = h;
  }

  findClient() {
    return this.http.get<Client>(this.endPoint + 'profile', {
      headers: this.authorizationHeaders,
      observe: 'body',
    });
  }

  
}
