import { TestBed } from '@angular/core/testing';

import { InmemoryeventService } from './inmemoryevent.service';

describe('InmemoryeventService', () => {
  let service: InmemoryeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmemoryeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
