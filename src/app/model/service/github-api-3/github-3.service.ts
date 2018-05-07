import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Github3Service {
  private url = 'https://api.github.com/repos/';

  constructor(private http: HttpClient, private repository: string) {
  }

  /**
   * filter = 'state=open'
   *
   * irá formar a url igual a: https://api.github.com/repos/frontendbr/vagas/issues?state=open
   *
   * @todo avaliar pesquisar no titulo e body direto na api do github
   * https://help.github.com/articles/searching-issues-and-pull-requests/
   * https://github.com/frontendbr/vagas/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+in%3Atitle+Angular+in%3Abody+Angular+C%23
   */
  public issues(filter: string = 'state=open'): Observable<any> {
    return this.http.get<any>(`${this.url}${this.repository}/issues?${filter}`);
  }
}
