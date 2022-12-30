import { TestBed } from '@angular/core/testing';

import { DigitalTwinSideNavService } from './digital-twin-side-nav.service';

describe('DigitalTwinSideNavService', () => {
  let service: DigitalTwinSideNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalTwinSideNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
