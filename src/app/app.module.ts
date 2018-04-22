import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MaterialDesignModule} from './share/angular-share/material-design/material-design.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularShareModule} from './share/angular-share/angular-share.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
