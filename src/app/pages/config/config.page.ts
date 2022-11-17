import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(
    public appComponent: AppComponent,
    public userAuthService: UserAuthService,


  ) { }

  ngOnInit() {
  }

}