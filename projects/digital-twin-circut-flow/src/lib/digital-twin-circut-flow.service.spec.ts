import { TestBed } from '@angular/core/testing';

import { DigitalTwinCircutFlowService } from './digital-twin-circut-flow.service';

describe('DigitalTwinCircutFlowService', () => {
  let service: DigitalTwinCircutFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalTwinCircutFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
