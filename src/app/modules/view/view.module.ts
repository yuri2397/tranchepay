import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ContactComponent } from 'src/app/shared/component/contact/contact.component';
import { DocumentationComponent } from 'src/app/shared/component/documentation/documentation.component';
import { IndexComponent } from 'src/app/shared/component/index/index.component';
import { ClientComponent } from 'src/app/shared/component/client/client.component';
import { CommercantComponent } from 'src/app/shared/component/commercant/commercant.component';

@NgModule({
  declarations: [
    ViewComponent,
    DocumentationComponent,
    IndexComponent,
    ContactComponent,
    ClientComponent,
    CommercantComponent,
  ],
  imports: [CommonModule, ViewRoutingModule],
})
export class ViewModule {}
