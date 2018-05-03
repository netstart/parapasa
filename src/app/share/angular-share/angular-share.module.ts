import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from './material-design/material-design.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, BrowserAnimationsModule,
    MaterialDesignModule
  ],
  exports: [
    CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, BrowserAnimationsModule,
    MaterialDesignModule],
  declarations: []
})
export class AngularShareModule {
}
