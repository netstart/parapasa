import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-issue-card-github',
  templateUrl: './issue-card-github.component.html',
  styleUrls: ['./issue-card-github.component.css']
})
export class IssueCardGithubComponent implements OnInit {

  @Input()
  issue$: Observable<any>;

  @Input()
  jobDescription: string;

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }}
