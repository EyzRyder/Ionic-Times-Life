import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { AppComponent } from '../../app.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public appComponent: AppComponent,
    public userAuthService: UserAuthService,
  ) { }

  ngOnInit() {
  }

}
