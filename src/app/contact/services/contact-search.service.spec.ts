import { TestBed } from '@angular/core/testing';

import { ContactSearchService } from './contact-search.service';

describe('ContactSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactSearchService = TestBed.get(ContactSearchService);
    expect(service).toBeTruthy();
  });
});
