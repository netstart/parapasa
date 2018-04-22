import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from './material-design/material-design.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule,
    MaterialDesignModule
  ],
  exports: [CommonModule, HttpClientModule, ReactiveFormsModule,
    MaterialDesignModule],
  declarations: []
})
export class AngularShareModule {
}
