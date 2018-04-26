import {NgModule} from '@angular/core';
import {SearchComponent} from './search/search.component';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [ShareModule],
  exports: [SearchComponent],
  declarations: [SearchComponent]
})
export class PageModule {
}
