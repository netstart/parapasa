import {NgModule} from '@angular/core';
import {AngularShareModule} from './angular-share/angular-share.module';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';

@NgModule({
  imports: [
    AngularShareModule
  ],
  exports: [AngularShareModule, HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent]
})
export class ShareModule {
}
