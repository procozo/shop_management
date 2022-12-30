import { TestBed } from '@angular/core/testing';

import { LogicHelperService } from './logic-helper.service';

describe('LogicHelperService', () => {
  let service: LogicHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
