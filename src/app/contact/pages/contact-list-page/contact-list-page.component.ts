import { Component } from '@angular/core';
import { Contact } from '../../types/contact.type';
import { ContactDataSourceService } from '../../services/contact-data-source.service';
import { ContactSearchService } from '../../services/contact-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: [ './contact-list-page.component.scss' ]
})
export class ContactListPageComponent {
  public contacts: Contact[];
  public query: string;

  constructor(
    private contactDataSource: ContactDataSourceService,
    private contactSearch: ContactSearchService,
    private router: Router
  ) {
    this.contacts = this.contactDataSource.getAll();
  }

  public handleSearch() {
    this.refreshList();
  }

  public handleDelete(contact: Contact) {
    const confirmDelete: boolean = confirm(`Are you sure you want to delete the contact: ${contact.name}`);

    if (!confirmDelete) return;

    this.contactDataSource.delete(contact.id);
    this.refreshList();
  }

  private refreshList() {
    if (!this.query) {
      this.contacts = this.contactDataSource.getAll();
      return;
    }

    this.contacts = this.contactSearch.search(this.query);
  }

  public handleEdit(contact: Contact) {
    this.router.navigateByUrl(`contacts/edit/${contact.id}`);
  }
}
