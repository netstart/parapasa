import {Pipe, PipeTransform} from '@angular/core';
import {isNull, isUndefined} from 'util';

@Pipe({
  name: 'issueGithubFilter'
})
export class IssueGithubFilterPipe implements PipeTransform {

  transform(issue: any, stringToFilter: string): boolean {
    // press enter in search to booooooommmmmm
    if (isUndefined(stringToFilter) || isNull(stringToFilter)) {
      return true;
    }

    return this.containTitle(issue, stringToFilter) || this.containBody(issue, stringToFilter);
  }

  containTitle(issue: any, stringToFilter: string) {
    return issue.title && issue.title.toLowerCase().includes(stringToFilter.toLowerCase());
  }

  containBody(issue: any, stringToFilter: string) {
    return issue.body && issue.body.toLowerCase().includes(stringToFilter.toLowerCase());
  }
}
