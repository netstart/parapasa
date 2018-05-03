import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueGithubFilterPipe} from './issue-github-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [IssueGithubFilterPipe],
  declarations: [IssueGithubFilterPipe]
})
export class PipeModule {
}
