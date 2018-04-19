import {TestBed, inject} from '@angular/core/testing';

import {Github3SoujavaService} from '../github-3-soujava.service';
import {HttpClientModule} from '@angular/common/http';

describe('Github3SoujavaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Github3SoujavaService]
    });
  });

  it('should be created', inject([Github3SoujavaService], (service: Github3SoujavaService) => {
    expect(service).toBeTruthy();
  }));
});
