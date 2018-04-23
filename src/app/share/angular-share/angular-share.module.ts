import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from './material-design/material-design.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule,
    MaterialDesignModule
  ],
  exports: [CommonModule, HttpClientModule, ReactiveFormsModule,
    MaterialDesignModule],
  declarations: []
})
export class AngularShareModule {
}
