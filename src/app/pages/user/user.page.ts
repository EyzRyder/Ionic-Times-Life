import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(
    public appComponent: AppComponent,

  ) { }

  ngOnInit(
  ) {
    
  }

}
