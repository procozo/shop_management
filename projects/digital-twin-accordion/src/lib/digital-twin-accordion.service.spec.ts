import { TestBed } from '@angular/core/testing';

import { DigitalTwinAccordionService } from './digital-twin-accordion.service';

describe('DigitalTwinAccordionService', () => {
  let service: DigitalTwinAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalTwinAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
