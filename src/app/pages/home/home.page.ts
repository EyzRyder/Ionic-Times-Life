import { TabsPage } from './../../tabs/tabs.page';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,
  ) { }

  ngOnInit() {
  }

}
