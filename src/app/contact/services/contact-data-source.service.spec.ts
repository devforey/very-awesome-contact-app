import { TestBed } from '@angular/core/testing';

import { ContactDataSourceService } from './contact-data-source.service';
import { NgxWebstorageModule } from 'ngx-webstorage';

describe('ContactDataSourceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ NgxWebstorageModule.forRoot() ]
    })
  );

  it('should be created', () => {
    const service: ContactDataSourceService = TestBed.get(ContactDataSourceService);
    expect(service).toBeTruthy();
  });

  it('should create Contact with an ID', async () => {
    const service: ContactDataSourceService = TestBed.get(ContactDataSourceService);
    const contact = await service.create({ name: 'John Doe', phoneNumber: '0967121231234', email: 'john@doe.com' });
    expect(contact.id).toBeDefined();
  });
});
