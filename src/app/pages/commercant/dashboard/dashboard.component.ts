import { Commande } from './../../../models/commande';
import { DashboardResponse } from './../../../models/dash-board-response';
import { CommercantService } from './../../../services/commercant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data!: DashboardResponse;
  isLoad = true;
  constructor(
    private commercantService: CommercantService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoad = true;
    this.commercantService.getStatistique().subscribe({
      next: response => {
        this.data = response;
        this.isLoad = false;
      },
      error: errors => {
        console.log(errors);
      }
    })
  }


  etatVente(vente: Commande){
    let total_versement = 0;
    vente.versements.forEach(element => {
      total_versement += element.montant;
    });
    if(total_versement < vente.prix_total)
      return false;
    return true;
  }

}
