import { Component } from '@angular/core';
import { ContactDataSourceService } from '../../services/contact-data-source.service';
import { Contact } from '../../types/contact.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create-page',
  templateUrl: './contact-create-page.component.html',
  styleUrls: [ './contact-create-page.component.scss' ]
})
export class ContactCreatePageComponent {
  public constructor(private contactDataSource: ContactDataSourceService, private router: Router) {}

  public handleSubmit(contact: Contact) {
    this.contactDataSource.create(contact);
    this.router.navigateByUrl('contacts');
  }
}
