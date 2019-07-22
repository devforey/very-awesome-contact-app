import { Injectable } from '@angular/core';

import { Contact } from '../types/contact.type';
import { LocalStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ContactDataSourceService {
  @LocalStorage('contact_by_id') private contactById: { [id: string]: Contact } = {};

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

  public async edit(contact: Contact): Promise<Contact> {
    return {} as Contact;
  }

  public async delete(id: string): Promise<void> {}

  public async search(query: string): Promise<Contact[]> {
    return [ {} as Contact ];
  }

  public async getOne(id: string): Promise<Contact> {
    return {} as Contact;
  }

  public async getAll(): Promise<Contact[]> {
    return [ {} as Contact ];
  }
}
