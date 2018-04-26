import {NgModule} from '@angular/core';
import {SearchModule} from './search/search.module';

@NgModule({
  imports: [
    SearchModule
  ],
  exports: [
    SearchModule
  ],
  declarations: []
})
export class ComponentModule {
}
