import { Injectable } from '@angular/core';

import { Contact } from '../types/contact.type';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataSourceService {
  public static LOCAL_KEY_CONTACTS = 'contact_by_id';

  @LocalStorage(ContactDataSourceService.LOCAL_KEY_CONTACTS) private contactById: { [id: string]: Contact };

  public constructor(private localStorageService: LocalStorageService) {}

  public data(): Observable<{ [id: string]: Contact }> {
    return this.localStorageService.observe(ContactDataSourceService.LOCAL_KEY_CONTACTS);
  }

  public getData(): { [id: string]: Contact } {
    return this.contactById;
  }

  public create({ name, phoneNumber, email }): Contact {
    const toCreate: Contact = { name, phoneNumber, email, id: this.createId() };
    const newContacts: { [id: string]: Contact } = { ...this.contactById, [toCreate.id]: toCreate };
    this.save(newContacts);
    return toCreate;
  }

  public createId(): string {
    return this.createRandomString();
  }

  // TODO: Might be a candidate to move to another service
  // Method copied and pasted from [StackOverflow](https://stackoverflow.com/a/1838571)
  public createRandomString(): string {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var string_length = 8;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }

  public save(contactById: { [id: string]: Contact }) {
    this.contactById = contactById;
  }

  public edit(contact: Contact): Contact {
    const editedContacts: { [id: string]: Contact } = { ...this.contactById, [contact.id]: contact };
    this.save(editedContacts);
    return contact;
  }

  public async delete(id: string) {
    const result: { [id: string]: Contact } = { ...this.contactById };
    delete result[id];
    this.save(result);
  }

  public async search(query: string): Promise<Contact[]> {
    return [ {} as Contact ];
  }

  public getOne(id: string): Contact {
    return this.contactById[id];
  }

  public getAll(): Contact[] {
    return Object.keys(this.contactById).map((contactId) => this.contactById[contactId]);
  }
}
