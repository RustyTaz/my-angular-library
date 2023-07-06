import { TestBed } from '@angular/core/testing';

import { ZyfraLibraryService } from './zyfra-library.service';

describe('ZyfraLibraryService', () => {
  let service: ZyfraLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZyfraLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
