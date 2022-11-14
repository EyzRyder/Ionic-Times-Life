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
  imc;
  sexo;
  dataNasc;
  idade;
  altura;
  peso;
  observacaoImc;
  headerText = 'Sign Up';

  public appPages = [
    { title: 'Dashboard', url: '/dashborad', icon: 'bar-chart' },
    { title: 'Metas', url: '/metas', icon: 'barbell' },
    { title: 'Saúde', url: '/saude', icon: 'heart' },
    { title: 'Blogs', url: '/blogs', icon: 'newspaper' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['beba 2L de água por dia', 'Coma de 3 horas e 3 hora', '16:30 tomar remedia'];
  constructor(
    public userAuthService: UserAuthService,
  ) {}
}
