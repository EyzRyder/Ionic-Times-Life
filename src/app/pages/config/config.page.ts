import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
import { TabsPage } from './../../tabs/tabs.page';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  selectedPage: string;

  constructor(
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,
  ) { 
    this.selectedPage = 'user';
  }

  segmentChange(e: any) {
    this.selectedPage = e.target.value;
  }
  ngOnInit() {
  }

}