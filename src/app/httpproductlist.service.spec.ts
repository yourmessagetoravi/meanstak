import { TestBed } from '@angular/core/testing';

import { HttpproductlistService } from './httpproductlist.service';

describe('HttpproductlistService', () => {
  let service: HttpproductlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpproductlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
