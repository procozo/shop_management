import { TestBed } from '@angular/core/testing';

import { DigitalTwinPlaceholderService } from './digital-twin-placeholder.service';

describe('DigitalTwinPlaceholderService', () => {
  let service: DigitalTwinPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalTwinPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
