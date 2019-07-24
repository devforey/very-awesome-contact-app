import { Injectable } from '@angular/core';
import { ContactDataSourceService } from './contact-data-source.service';
import { Contact } from '../types/contact.type';
import * as Fuse from 'fuse.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactSearchService {
  private fuse: Fuse<Contact>;

  private allContacts: Contact[] = [];

  private searchOptions: Fuse.FuseOptions<Contact> = {
    shouldSort: true,
    threshold: 0,
    location: 0,
    distance: 0,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [ 'name', 'phoneNumber', 'email' ]
  };

  public constructor(private contactDataSource: ContactDataSourceService) {
    this.fillSearchableList(this.contactDataSource.getData());
    this.contactDataSource.data().subscribe(this.fillSearchableList.bind(this));
  }

  private fillSearchableList(contactById: { [id: string]: Contact }) {
    this.allContacts = Object.keys(contactById).map((contactId: string) => {
      return contactById[contactId];
    });
    if (this.fuse) {
      this.fuse.setCollection(this.allContacts);
    } else {
      this.fuse = new Fuse(this.allContacts, this.searchOptions);
    }
  }

  public search(query: string): Contact[] {
    return this.fuse.search(query);
  }

  public contacts(): Observable<{ [id: string]: Contact }> {
    return this.contactDataSource.data();
  }
}
