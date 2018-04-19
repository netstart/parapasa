import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class Github3Service {
  private url = 'https://api.github.com/repos/';

  constructor(private http: HttpClient, private repository: string) {
  }

  /**
   * filter = 'state=open'
   *
   * irá formar a url igual a: https://api.github.com/repos/frontendbr/vagas/issues?state=open
   */
  public issues(filter: string): Observable<any> {
    return this.http.get<any>(`${this.url}${this.repository}/issues?${filter}`);
  }
}
