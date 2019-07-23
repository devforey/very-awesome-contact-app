import { Component } from '@angular/core';
import { Contact } from '../../types/contact.type';
import { ContactDataSourceService } from '../../services/contact-data-source.service';
import { ContactSearchService } from '../../services/contact-search.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: [ './contact-list-page.component.scss' ]
})
export class ContactListPageComponent {
  public contacts: Contact[];

  constructor(private contactDataSource: ContactDataSourceService, private contactSearch: ContactSearchService) {
    this.contacts = this.contactDataSource.getAll();
  }

  public handleSearch(query: string) {
    if (!query) {
      this.contacts = this.contactDataSource.getAll();
      return;
    }

    this.contacts = this.contactSearch.search(query);
  }
}
