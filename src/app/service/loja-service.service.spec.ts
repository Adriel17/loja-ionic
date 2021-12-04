import { TestBed } from '@angular/core/testing';

import { LojaServiceService } from './loja-service.service';

describe('LojaServiceService', () => {
  let service: LojaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LojaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
