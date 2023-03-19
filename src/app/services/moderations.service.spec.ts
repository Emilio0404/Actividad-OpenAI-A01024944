import { TestBed } from '@angular/core/testing';

import { ModerationsService } from './moderations.service';

describe('ModerationsService', () => {
  let service: ModerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModerationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
