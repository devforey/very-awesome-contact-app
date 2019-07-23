import { Component, OnInit } from '@angular/core';
import { Contact } from '../../types/contact.type';
import { ContactDataSourceService } from '../../services/contact-data-source.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: [ './contact-list-page.component.scss' ]
})
export class ContactListPageComponent implements OnInit {
  public contacts: Contact[];

  constructor(private contactDataSource: ContactDataSourceService) {
    this.contacts = this.contactDataSource.getAll();
  }

  ngOnInit() {}
}
