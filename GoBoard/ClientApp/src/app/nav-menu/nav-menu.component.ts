import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  public version: VersionInfo;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<VersionInfo>(baseUrl + 'api/v1/version').subscribe(result => {
      this.version = result;
    }, error => console.error(error));
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

interface VersionInfo {
  name: string;
}
