import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {PageRoutingModule} from './page.routing.module';
import {ComponentModule} from '../component/component.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [PageRoutingModule, ShareModule, ComponentModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class PageModule {
}
