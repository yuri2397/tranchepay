import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercantComponent } from './modules/commercant/commercant.component';
import { ViewComponent } from './modules/view/view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: ViewComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/view/view.module').then((m) => m.ViewModule),
      },
    ],
  },
  {
    path: 'commercant',
    component: CommercantComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/commercant/commercant.module').then(
            (m) => m.CommercantModule
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./modules/client/client.module').then((m) => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
