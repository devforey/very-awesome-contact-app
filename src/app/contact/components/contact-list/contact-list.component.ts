import { Component, Input } from '@angular/core';
import { Contact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: [ './contact-list.component.scss' ]
})
export class ContactListComponent {
  @Input() public contacts: Contact[];

  public trackById(_: number, contact: Contact) {
    return contact.id;
  }

  public handleContactClick(contact: Contact) {
    console.log('click', contact);
  }

  public handleContactDelete(contact: Contact) {
    console.log('delete', contact);
  }

  public handleContactEdit(contact: Contact) {
    console.log('edit', contact);
  }
}
