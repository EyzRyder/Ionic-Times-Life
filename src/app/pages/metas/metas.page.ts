import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {

  constructor(
    public appComponent: AppComponent,
    public userAuthService: UserAuthService,
  ) { }

  ngOnInit() {
  }

}
