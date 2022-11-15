import { Component } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user;
  name;
  headerText = 'Sign Up';

  public appPages = [
    { title: 'Home', url: '/home', icon: 'newspaper' },
    { title: 'Dashboard', url: '/dashborad', icon: 'bar-chart' },
    { title: 'Metas', url: '/metas', icon: 'barbell' },
    { title: 'Saúde', url: '/saude', icon: 'heart' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['beba 2L de água por dia', 'Coma de 3 horas e 3 hora', '16:30 tomar remedia'];
  constructor(
    public userAuthService: UserAuthService,
  ) {
    this.userAuthService.userObservable.subscribe((userData) => {
      this.user = userData;
    })
  }


  getLoginButtonText() {
    if (this.user == null) {
      return this.name = 'pessoa';
    } else {
        // this.idade = (new Date().getFullYear() - parseInt((this.user.dataNasc).substring(0, 4)));
      return this.name = this.user.username;
    }
  }

}
