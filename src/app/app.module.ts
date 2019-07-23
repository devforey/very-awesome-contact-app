import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIdBadge, faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ContactModule.forRoot(),
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  public constructor() {
    library.add(faIdBadge, faTrashAlt, faEdit);
  }
}
