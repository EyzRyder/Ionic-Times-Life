import { Component, OnInit } from '@angular/core';
import { TabsPage } from './../../tabs/tabs.page';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,

  ) { }

  ngOnInit(
  ) {
    
  }

}
