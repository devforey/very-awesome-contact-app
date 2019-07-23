import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDataSourceService } from './services/contact-data-source.service';
import { ContactSearchService } from './services/contact-search.service';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { ContactCreatePageComponent } from './pages/contact-create-page/contact-create-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';

@NgModule({
  declarations: [ ContactListPageComponent, ContactCreatePageComponent, ContactEditPageComponent ],
  imports: [ CommonModule, ContactRoutingModule ]
})
export class ContactModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContactModule,
      providers: [ ContactDataSourceService, ContactSearchService ]
    };
  }
}
