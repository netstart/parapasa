import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KongLabsService} from './konng-labs.service';

@Injectable()
export class KonngLabsMaringaService extends KongLabsService {

  constructor(http: HttpClient) {
    super(http, 'maringa.com-devjob-scrapper');
  }
}
