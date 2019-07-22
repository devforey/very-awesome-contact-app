import { Injectable } from '@angular/core';
import { Contact } from '../types/contact.type';

@Injectable({
  providedIn: 'root'
})
export class ContactDataSourceService {
  public async create(contact: Contact): Promise<Contact> {
    return {} as Contact;
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
