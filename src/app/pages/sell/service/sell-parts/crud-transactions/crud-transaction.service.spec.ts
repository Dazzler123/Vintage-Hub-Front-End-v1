import { TestBed } from '@angular/core/testing';

import { CrudTransactionService } from './crud-transaction.service';

describe('CrudTransactionService', () => {
  let service: CrudTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
