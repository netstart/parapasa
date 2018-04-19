import { TestBed, inject } from '@angular/core/testing';

import { Github3BackendbrMecontrataService } from '../github-3-backendbr-mecontrata.service';
import {HttpClientModule} from '@angular/common/http';

describe('Github3BackendbrMecontrataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Github3BackendbrMecontrataService]
    });
  });

  it('should be created', inject([Github3BackendbrMecontrataService], (service: Github3BackendbrMecontrataService) => {
    expect(service).toBeTruthy();
  }));
});
