import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'issueGithubFilter'
})
export class IssueGithubFilterPipe implements PipeTransform {

  transform(issue: any, stringToFilter: string): boolean {
    return stringToFilter &&
      (this.containTitle(issue, stringToFilter) || this.containBody(issue, stringToFilter));
  }

  containTitle(issue: any, stringToFilter: string) {
    return issue.title && issue.title.toLowerCase().includes(stringToFilter.toLowerCase());
  }

  containBody(issue: any, stringToFilter: string) {
    return issue.body && issue.body.toLowerCase().includes(stringToFilter.toLowerCase());
  }
}
