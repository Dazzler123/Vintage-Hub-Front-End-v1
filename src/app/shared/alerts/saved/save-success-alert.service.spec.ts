import { TestBed } from '@angular/core/testing';

import { SaveSuccessAlertService } from './save-success-alert.service';

describe('SaveSuccessAlertService', () => {
  let service: SaveSuccessAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveSuccessAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
