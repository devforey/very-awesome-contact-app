import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactDataSourceService } from './services/contact-data-source.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, ContactRoutingModule ]
})
export class ContactModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContactModule,
      providers: [ ContactDataSourceService ]
    };
  }
}
