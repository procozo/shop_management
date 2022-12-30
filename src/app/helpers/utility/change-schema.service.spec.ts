import { TestBed } from '@angular/core/testing';

import { ChangeSchemaService } from './change-schema.service';

describe('ChangeSchemaService', () => {
  let service: ChangeSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
