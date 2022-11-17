import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {

  constructor(
    public appComponent: AppComponent,
    public userAuthService: UserAuthService,

  ) { }

  ngOnInit() {
  }

}
