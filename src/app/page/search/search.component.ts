import {Component, OnInit} from '@angular/core';
import {Github3FrontendbrService} from '../../model/service/github-api-3/github-3-frontendbr.service';
import {Observable} from 'rxjs';
import {Github3BackendbrVagasService} from '../../model/service/github-api-3/github-3-backendbr-vagas.service';
import {Github3ReactBrasilService} from '../../model/service/github-api-3/github-3-react-brasil.service';
import {Github3SoujavaService} from '../../model/service/github-api-3/github-3-soujava.service';
import {Github3AndroidDevBrService} from '../../model/service/github-api-3/github-3-androiddevbr.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  issuesFrontendBr$: Observable<any>;
  backendBrService$: Observable<any>;
  reactBrasilService$: Observable<any>;
  soujava$: Observable<any>;
  androidDevBr$: Observable<any>;


  constructor(private frontendbrService: Github3FrontendbrService,
              private backendBrService: Github3BackendbrVagasService,
              private reactBrasilService: Github3ReactBrasilService,
              private soujavaService: Github3SoujavaService,
              private androidDevBrService: Github3AndroidDevBrService,) {
  }

  ngOnInit() {
  }

  search() {
    this.issuesFrontendBr$ = this.frontendbrService.issues();
    this.backendBrService$ = this.backendBrService.issues();
    this.reactBrasilService$ = this.reactBrasilService.issues();
    this.soujava$ = this.soujavaService.issues();
    this.androidDevBr$ = this.androidDevBrService.issues();
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
