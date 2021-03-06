import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: [ './contact-form.component.scss' ]
})
export class ContactFormComponent implements OnInit {
  @Input() public contact: Contact;

  @Output() public submit: EventEmitter<Contact> = new EventEmitter();
  @Output() public cancel: EventEmitter<void> = new EventEmitter();

  @Input() public emails: string[] = [];
  @Input() public phoneNumbers: string[] = [];

  public ngOnInit() {
    if (this.contact) {
      return;
    }

    this.contact = {} as Contact;
  }

  public handleSubmit() {
    this.submit.emit(this.contact);
  }

  public handleCancel() {
    this.cancel.emit();
  }
}
