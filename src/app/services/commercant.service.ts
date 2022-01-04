import { HttpClient } from '@angular/common/http';
import { Base } from './../shared/http/base';
import { Injectable } from '@angular/core';
import { DashboardResponse } from '../models/dash-board-response';
import { VentesResponse } from '../models/ventes-response';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class CommercantService extends Base {
  protected override _baseUrl: string = 'commercant/';
  constructor(private h: HttpClient) {
    super();
    this.httpClient = h;
  }

  getStatistique() {
    return this.http.get<DashboardResponse>(this.endPoint + 'dashboard', {
      headers: this.authorizationHeaders,
      observe: 'body',
    });
  }

  getVentes(){
    return this.http.get<VentesResponse>(this.endPoint + 'ventes/', {
      headers: this.authorizationHeaders,
      observe: 'body'
    })
  }


  findByClientTelephone(telephone: string) {
    return this.http.get<Client[]>(this.endPoint + 'search-client/' + telephone, {
      headers: this.authorizationHeaders,
      observe: 'body',
    });
  }
}
