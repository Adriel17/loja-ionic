import { TestBed } from '@angular/core/testing';

import { FileSystemServiceService } from './file-system-service.service';

describe('FileSystemServiceService', () => {
  let service: FileSystemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileSystemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
