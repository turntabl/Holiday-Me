import { TestBed } from '@angular/core/testing';

import { OpenIDServiceService } from './open-idservice.service';

describe('OpenIDServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenIDServiceService = TestBed.get(OpenIDServiceService);
    expect(service).toBeTruthy();
  });
});
