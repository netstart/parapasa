import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Github3FrontendbrService} from './github-api-3/github-3-frontendbr.service';
import {Github3BackendbrVagasService} from './github-api-3/github-3-backendbr-vagas.service';
import {Github3ReactBrasilService} from './github-api-3/github-3-react-brasil.service';
import {Github3SoujavaService} from './github-api-3/github-3-soujava.service';
import {Github3AndroidDevBrService} from './github-api-3/github-3-androiddevbr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [Github3FrontendbrService, Github3BackendbrVagasService, Github3FrontendbrService,
    Github3ReactBrasilService, Github3SoujavaService, Github3AndroidDevBrService]
})
export class ServiceModule {
}
