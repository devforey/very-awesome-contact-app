import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: [ './contact-list.component.scss' ]
})
export class ContactListComponent {
  @Input() public contacts: Contact[];

  @Output() public click: EventEmitter<Contact> = new EventEmitter();
  @Output() public delete: EventEmitter<Contact> = new EventEmitter();
  @Output() public edit: EventEmitter<Contact> = new EventEmitter();

  public trackById(_: number, contact: Contact) {
    return contact.id;
  }

  public handleContactClick(contact: Contact) {
    this.click.emit(contact);
  }

  public handleContactDelete(contact: Contact) {
    this.delete.emit(contact);
  }

  public handleContactEdit(contact: Contact) {
    this.edit.emit(contact);
  }
}
