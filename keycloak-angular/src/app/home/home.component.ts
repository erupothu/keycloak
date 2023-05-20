import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  token: any;
  
  constructor(protected keycloak: KeycloakService) {

  }

  logout() {
    this.keycloak.logout();
  }

  async getToken() {
    this.token = await this.keycloak.getToken();
  }

}
