import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Github3Service} from './github-3.service';

@Injectable()
export class Github3FrontendbrService extends Github3Service {

  constructor(http: HttpClient) {
    super(http, 'frontendbr/vagas');
  }


}
