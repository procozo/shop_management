import { TestBed } from '@angular/core/testing';

import { ProgramAdminService } from './program-admin.service';

describe('ProgramAdminService', () => {
  let service: ProgramAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
