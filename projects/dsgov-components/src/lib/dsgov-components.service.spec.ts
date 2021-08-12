import { TestBed } from '@angular/core/testing';

import { DsgovComponentsService } from './dsgov-components.service';

describe('DsgovComponentsService', () => {
  let service: DsgovComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DsgovComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
