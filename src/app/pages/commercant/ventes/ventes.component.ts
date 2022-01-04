import { Router } from '@angular/router';
import { VentesResponse } from './../../../models/ventes-response';
import { CommercantService } from './../../../services/commercant.service';
import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/models/commande';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AjouterVentesComponent } from './ajouter-ventes/ajouter-ventes.component';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss'],
})
export class VentesComponent implements OnInit {
  visible = false;
  listOfDisplayData: any[] = [];
  listOfData: any[] = [];
  searchValue = '';
  data!: VentesResponse;
  isLoad = true;
  constructor(
    private commercantService: CommercantService,
    private modalService: NzModalService,
    private drawerService: NzDrawerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoad = true;
    this.commercantService.getVentes().subscribe({
      next: (response) => {
        console.log(response);
        this.data = response;
        this.isLoad = false;
      },
      error: (errors) => {
        console.log(errors);
        this.isLoad = false;
      },
    });
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter(
      (item: any) => item.name.indexOf(this.searchValue) !== -1
    );
  }

  etatVente(vente: Commande) {
    let total_versement = 0;
    vente.versements.forEach((element) => {
      total_versement += element.montant;
    });
    if (total_versement < vente.prix_total) return false;
    return true;
  }

  openCreateVenteModal() {
    this.router.navigate(['/commercant/add-vente']);
  }
}
