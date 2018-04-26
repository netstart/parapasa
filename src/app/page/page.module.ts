import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {ShareModule} from '../share/share.module';
import {PageRoutingModule} from './page.routing.module';

@NgModule({
  imports: [ShareModule, PageRoutingModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class PageModule {
}
