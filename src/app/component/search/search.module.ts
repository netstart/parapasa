import {NgModule} from '@angular/core';
import {IssueCardGithubComponent} from './issue-card-github/issue-card-github.component';
import {ShareModule} from '../../share/share.module';

@NgModule({
  imports: [ShareModule],
  exports: [IssueCardGithubComponent],
  declarations: [IssueCardGithubComponent]
})
export class SearchModule {
}
