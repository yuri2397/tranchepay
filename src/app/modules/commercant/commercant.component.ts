import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  roles: string[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: 'accueil',
    title: 'Tableau de   bord',
    icon: 'home',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'ventes',
    title: 'Listes des ventes',
    icon: 'format_list_numbered',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'soldes',
    title: 'Solde',
    icon: 'account_balance',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'parametres',
    title: 'Paramétres',
    icon: 'settings',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'utilisateurs',
    title: 'Utilisateurs',
    icon: 'people',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'api',
    title: 'API',
    icon: 'leak_add',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'conditions',
    title: 'Conditions',
    icon: 'gavel',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'parrainages',
    title: 'Parrainages',
    icon: 'loyalty',
    class: '',
    roles: ['super admin'],
  },
  {
    path: 'aide',
    title: 'Services client',
    icon: 'support',
    class: '',
    roles: ['super admin'],
  },
];

@Component({
  selector: 'app-commercant',
  templateUrl: './commercant.component.html',
  styleUrls: ['./commercant.component.scss'],
})
export class CommercantComponent implements OnInit {
  isCollapsed = false;
  menuItems!: RouteInfo[];
  isLoad = false;
  title = 'TRANCHEPAY';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  routerLink(item: RouteInfo) {
    this.router.navigate(['/commercant/' + item.path]);
  }

  logout() {}

  selected(item: RouteInfo) {
    return this.router.url.indexOf(item.path) !== -1 ? true : false;
  }
}
