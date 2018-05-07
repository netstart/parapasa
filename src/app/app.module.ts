import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ShareModule} from './share/share.module';
import {AppRoutingModule} from './app.routing.module';
import {ComponentModule} from './component/component.module';
import {PageModule} from './page/page.module';
import {ServiceModule} from './model/service/service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ShareModule, ComponentModule, ServiceModule,
    AppRoutingModule,

    PageModule,
  ],
  exports: [BrowserModule, ShareModule, ComponentModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
