import {NgModule} from '@angular/core';
import {AngularShareModule} from './angular-share/angular-share.module';
import {PipeModule} from './pipe/pipe.module';

@NgModule({
  imports: [
    AngularShareModule, PipeModule
  ],
  exports: [AngularShareModule, PipeModule],
  declarations: []
})
export class ShareModule {
}
