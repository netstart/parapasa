import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit() {
  }

  onLogout() {
    console.log('HeaderComponent.onLogout');
  }

  isAuthenticated(): boolean {
    return false;
  }
}
