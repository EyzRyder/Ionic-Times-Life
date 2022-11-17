import { Component } from '@angular/core';
import { UserAuthService } from './services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  perfilpadrao = 'https://firebasestorage.googleapis.com/v0/b/times-new-life.appspot.com/o/img%2FAvatar.svg?alt=media&token=930a25ad-6a2b-449a-b4b2-694177b3206b';
  user;
  name;
  imc;
  pic;
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
      this.pic = this.user.profilePic;
      this.imc = this.user.imc;
      return this.name = this.user.username;
    }
  }

}
