import {NgModule} from '@angular/core';
import {ListVacancyComponent} from './list-vacancy/list-vacancy.component';
import {InputSearchComponent} from './input-search/input-search.component';

@NgModule({
  imports: [],
  exports: [ListVacancyComponent, InputSearchComponent],
  declarations: [ListVacancyComponent, InputSearchComponent]
})
export class SearchModule {
}
