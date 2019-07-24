import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ContactSearchComponent } from './components/contact-search/contact-search.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { UniqueDirective } from './directives/unique.directive';

@NgModule({
  declarations: [
    ContactListPageComponent,
    ContactCreatePageComponent,
    ContactEditPageComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactSearchComponent,
    ContactFormComponent,
    UniqueDirective
  ],
  imports: [ CommonModule, FormsModule, PageModule, ContactRoutingModule, FontAwesomeModule ]
})
export class ContactModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContactModule,
      providers: [ ContactDataSourceService, ContactSearchService ]
    };
  }
}
