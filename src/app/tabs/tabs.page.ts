import { Component, OnInit, ViewChild } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('popover') popover;

  isOpen = false;
  user;
  name;
  imc;
  pic;
  headerText = 'Sign Up';
  constructor(
    public userAuthService: UserAuthService,
    public router: Router

  ) { 
    this.userAuthService.userObservable.subscribe((userData) => {
      this.user = userData;
    })
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  

  getLoginButtonText() {
    if (this.user == null) {
      return this.name = 'Usuário';
    } else {
      // this.idade = (new Date().getFullYear() - parseInt((this.user.dataNasc).substring(0, 4)));
      this.pic = this.user.profilePic;
      this.imc = this.user.imc;
      return this.name = this.user.username;
    }
  }

  ngOnInit() {
  }

}
