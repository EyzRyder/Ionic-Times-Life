import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {

  constructor(
    public userAuthService: UserAuthService,

  ) { }

  ngOnInit() {
  }

}
