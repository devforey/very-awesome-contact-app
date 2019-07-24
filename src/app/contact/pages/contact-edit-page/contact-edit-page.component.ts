import { Component, OnInit } from '@angular/core';
import { ContactDataSourceService } from '../../services/contact-data-source.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Contact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: [ './contact-edit-page.component.scss' ]
})
export class ContactEditPageComponent implements OnInit {
  public contact: Contact = {} as Contact;
  public emails: string[];
  public phoneNumbers: string[];

  public constructor(
    private contactDataSource: ContactDataSourceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.contact = this.getContact();

    if (!this.contact) {
      return;
    }

    const onlyOtherEmails = (email) => email !== this.contact.email;
    const onlyOtherPhoneNumbers = (phoneNumber) => phoneNumber !== this.contact.phoneNumber;

    this.emails = this.contactDataSource.getEmails().filter(onlyOtherEmails);
    this.phoneNumbers = this.contactDataSource.getPhoneNumbers().filter(onlyOtherPhoneNumbers);
  }

  private getContact(): Contact | undefined {
    const params: Params = this.activatedRoute.snapshot.params;
    if (!params || !params.id) {
      this.router.navigateByUrl('contacts');
      return undefined;
    }

    return this.contactDataSource.getOne(params.id);
  }

  public handleSubmit(contact: Contact) {
    this.contactDataSource.edit(contact);
    this.router.navigateByUrl('contacts');
  }

  public handleCancel() {
    this.router.navigateByUrl('contacts');
  }
}
