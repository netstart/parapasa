import {TestBed, inject} from '@angular/core/testing';

import {Github3Service} from '../github-3.service';

describe('Github3Service', () => {

  let github3Service: Github3Service;
  beforeEach(() => {
    github3Service = new Github3Service(null, 'repofake');
  });

  it('should be created', () => {
    expect(github3Service).toBeTruthy();
  });

});
