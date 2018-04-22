import {inject, TestBed} from '@angular/core/testing';

import {Github3FrontendbrService} from '../github-3-frontendbr.service';
import {HttpClientModule} from '@angular/common/http';

describe('Github3FrontendbrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Github3FrontendbrService]
    });
  });

  it('should be created', inject([Github3FrontendbrService], (service: Github3FrontendbrService) => {
    expect(service).toBeTruthy();
  }));
});
