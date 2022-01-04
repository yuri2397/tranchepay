import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { CommercantService } from './../../../../services/commercant.service';
import { ClientService } from './../../../../services/client.service';
import { Produit } from './../../../../models/produit';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-ajouter-ventes',
  templateUrl: './ajouter-ventes.component.html',
  styleUrls: ['./ajouter-ventes.component.scss'],
})
export class AjouterVentesComponent implements OnInit {
  validateForm!: FormGroup;
  validateFormAddClient!: FormGroup;
  validateFormClient!: FormGroup;
  isLoad: boolean = false;
  produits: Produit[] = [];
  clients: Client[] = [];
  loadClient = false;
  drawerVisible = false;
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private commercantService: CommercantService,
    private drawerService: NzDrawerService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nom_produit: [null, [Validators.required]],
      quantite_produit: [null, [Validators.required, Validators.min(0)]],
      prix_unitaire_produit: [null, [Validators.required, Validators.min(500)]],
    });

    this.validateFormClient = this.fb.group({
      telephone: [
        null,
        [Validators.required, Validators.minLength(9), Validators.minLength(9)],
      ],
      mode_payement: [
        null,
        [Validators.required, Validators.minLength(9), Validators.minLength(9)],
      ],
    });

    this.validateFormClient = this.fb.group({
      prenom: [
        null,
        [Validators.required ],
      ],
      nom: [
        null,
        [Validators.required ],
      ],
      telephone: [
        null,
        [Validators.required ],
      ],
      adresse: [
        null,
        [Validators.required ],
      ],
    });
  }

  addToList() {
    let p = new Produit();
    p.nom = this.validateForm.value.nom_produit;
    p.quantite = this.validateForm.value.quantite_produit;
    p.prix_unitaire = this.validateForm.value.prix_unitaire_produit;
    this.produits = [...this.produits, p];
    this.validateForm.reset();
    console.log('LIST DE PRODUITS', this.produits);
  }

  removeProduit(data: Produit) {
    this.produits.splice(this.produits.indexOf(data), 1);
    this.produits = [...this.produits];
  }

  addClient() {
    this.drawerVisible = true;
  }

  onClientSearch(data: string) {
    this.loadClient = true;
    if (data.length >= 5) {
      this.commercantService.findByClientTelephone(data).subscribe({
        next: (response) => {
          this.clients = response;
          this.loadClient = false;
        },
        error: (errors) => {
          console.error(errors);
          this.loadClient = false;
        },
      });
    }
  }

  saveClient() {}
}
