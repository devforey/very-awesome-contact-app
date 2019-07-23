import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDataSourceService } from './services/contact-data-source.service';
import { ContactSearchService } from './services/contact-search.service';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactCreatePageComponent } from './pages/contact-create-page/contact-create-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { PageModule } from '../page/page.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactListItemComponent } from './components/contact-list-item/contact-list-item.component';

@NgModule({
  declarations: [
    ContactListPageComponent,
    ContactCreatePageComponent,
    ContactEditPageComponent,
    ContactListComponent,
    ContactListItemComponent
  ],
  imports: [ CommonModule, PageModule, ContactRoutingModule, FontAwesomeModule ]
})
export class ContactModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContactModule,
      providers: [ ContactDataSourceService, ContactSearchService ]
    };
  }
}
