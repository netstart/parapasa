import {NgModule} from '@angular/core';
import {Github3AndroidDevBrService} from './github-3-androiddevbr.service';
import {Github3BackendbrVagasService} from './github-3-backendbr-vagas.service';
import {Github3FrontendbrService} from './github-3-frontendbr.service';
import {Github3ReactBrasilService} from './github-3-react-brasil.service';
import {Github3SoujavaService} from './github-3-soujava.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [Github3FrontendbrService, Github3BackendbrVagasService,
    Github3ReactBrasilService, Github3SoujavaService, Github3AndroidDevBrService],
  exports: []
})
export class GithubApi3Module {
}
