import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: [ './contact-list-item.component.scss' ]
})
export class ContactListItemComponent {
  @Input() public contact: Contact;

  @Output() public click: EventEmitter<Contact> = new EventEmitter();
  @Output() public delete: EventEmitter<Contact> = new EventEmitter();
  @Output() public edit: EventEmitter<Contact> = new EventEmitter();

  public handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(this.contact);
  }

  public handleDelete(event) {
    event.stopPropagation();
    event.preventDefault();
    this.delete.emit(this.contact);
  }

  public handleEdit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.edit.emit(this.contact);
  }
}
