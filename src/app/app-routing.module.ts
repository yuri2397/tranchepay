import { UnauthorizationComponent } from './shared/component/unauthorization/unauthorization.component';
import { ClientGuard } from './guard/client.guard';
import { CommercantGuard } from './guard/commercant.guard';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
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
        canActivate: [AuthGuard, CommercantGuard],
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
    canActivate: [AuthGuard, ClientGuard],
  },
  {
    path: "**", component: PageNotFoundComponent
  },
  {path: "unauthorization", component: UnauthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
