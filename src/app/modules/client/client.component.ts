import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  isLoad = true;
  client!: Client;
  constructor(
    private clientService: ClientService,
    private notification: NzNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.isLoad = true;
    this.clientService.findClient().subscribe({
      next: (response) => {
        this.client = response;
        console.log(this.client);
        this.isLoad = false;
        this.notification.success(
          'Bienvenue',
          'Heureux de voir revoir ' +
            this.client.prenoms.toUpperCase() +
            ' ' +
            this.client.nom
        );
      },
      error: (errors) => {
        console.error(errors);
        this.isLoad = false;
      },
    });
  }

  logout(){
    this.clientService.logout();
    this.router.navigate(['/auth']);
  }
}
