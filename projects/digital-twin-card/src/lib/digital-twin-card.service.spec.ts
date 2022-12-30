import { TestBed } from '@angular/core/testing';

import { DigitalTwinCardService } from './digital-twin-card.service';

describe('DigitalTwinCardService', () => {
  let service: DigitalTwinCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalTwinCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
