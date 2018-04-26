import {NgModule} from '@angular/core';
import {AngularShareModule} from './angular-share/angular-share.module';

@NgModule({
  imports: [
    AngularShareModule
  ],
  exports: [AngularShareModule],
  declarations: []
})
export class ShareModule {
}
