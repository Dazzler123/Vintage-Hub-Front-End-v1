import { TestBed } from '@angular/core/testing';

import { SaveFailedAlertService } from './save-failed-alert.service';

describe('SaveFailedAlertService', () => {
  let service: SaveFailedAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveFailedAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
