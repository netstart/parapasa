import {inject, TestBed} from '@angular/core/testing';

import {Github3ReactBrasilService} from '../github-3-react-brasil.service';
import {HttpClientModule} from '@angular/common/http';

describe('Github3ReactBrasilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Github3ReactBrasilService]
    });
  });

  it('should be created', inject([Github3ReactBrasilService], (service: Github3ReactBrasilService) => {
    expect(service).toBeTruthy();
  }));
});
