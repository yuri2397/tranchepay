import { AideComponent } from './../../pages/commercant/aide/aide.component';
import { ParrainagesComponent } from './../../pages/commercant/parrainages/parrainages.component';
import { ConditionsComponent } from './../../pages/commercant/conditions/conditions.component';
import { ApiComponent } from './../../pages/commercant/api/api.component';
import { UtilisateursComponent } from './../../pages/commercant/utilisateurs/utilisateurs.component';
import { ParametresComponent } from './../../pages/commercant/parametres/parametres.component';
import { ComptabiliteComponent } from './../../pages/commercant/comptabilite/comptabilite.component';
import { SoldesComponent } from './../../pages/commercant/soldes/soldes.component';
import { VentesComponent } from './../../pages/commercant/ventes/ventes.component';
import { DashboardComponent } from './../../pages/commercant/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercantComponent } from './commercant.component';
import { AjouterVentesComponent } from 'src/app/pages/commercant/ventes/ajouter-ventes/ajouter-ventes.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil'},
  { path: 'accueil', component: DashboardComponent },
  { path: 'ventes', component: VentesComponent },
  { path: 'soldes', component: SoldesComponent },
  { path: 'comptabilite', component: ComptabiliteComponent },
  { path: 'parametres', component: ParametresComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'api', component: ApiComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'parrainages', component: ParrainagesComponent },
  { path: 'aide', component: AideComponent },
  {path: 'add-vente', component: AjouterVentesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercantRoutingModule {}
