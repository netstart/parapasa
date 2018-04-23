import {Github3Service} from '../github-3.service';
import {HttpClient} from '@angular/common/http';

describe('Github3Service', () => {

  let github3Service: Github3Service;
  let httpClientModuleSpy;
  beforeEach(() => {
    httpClientModuleSpy = jasmine.createSpyObj('HttpClient', ['get']);
    github3Service = new Github3Service(httpClientModuleSpy, 'frontendbr/vagas');
  });

  it('should be created', () => {
    expect(github3Service).toBeTruthy();
  });

  it('Should be call 1', () => {
    github3Service.issues('state=open');
    expect(httpClientModuleSpy.get.calls.count())
      .toBe(1, 'Deveria ter chamado o get uma vez');
    expect(httpClientModuleSpy.get).toHaveBeenCalledTimes(1);
    expect(httpClientModuleSpy.get).toHaveBeenCalled();
  });

  it('Should be generate full url and called with it', () => {
    github3Service.issues('state=open');
    expect(httpClientModuleSpy.get).toHaveBeenCalledWith('https://api.github.com/repos/frontendbr/vagas/issues?state=open');
  });

});
