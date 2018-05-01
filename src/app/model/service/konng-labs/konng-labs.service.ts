import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class KongLabsService {
  private url = `http://konnng.com/labs/${this.repository}/data/db.json`;

  constructor(private http: HttpClient, private repository: string) {
  }

  public all(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, X-Requested-With',
        // 'Access-Control-Allow-Credentials': 'true',
      })
    };
    return this.http.get<any>(`${this.url}`, httpOptions)
      .map(
        obj => obj.jobs,
        error => console.log('err', error));
  }
}
