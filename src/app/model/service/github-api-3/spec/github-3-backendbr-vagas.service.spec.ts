import { TestBed, inject } from '@angular/core/testing';

import { Github3BackendbrVagasService } from '../github-3-backendbr-vagas.service';
import {HttpClientModule} from '@angular/common/http';

describe('Github3BackendbrVagasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Github3BackendbrVagasService]
    });
  });

  it('should be created', inject([Github3BackendbrVagasService], (service: Github3BackendbrVagasService) => {
    expect(service).toBeTruthy();
  }));
});
