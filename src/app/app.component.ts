import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'bar-chart' },
    { title: 'Metas', url: '/folder/Metas', icon: 'barbell' },
    { title: 'Saúde', url: '/folder/Saude', icon: 'heart' },
    { title: 'Blogs', url: '/folder/Blogs', icon: 'newspaper' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['beba 2L de água por dia', 'Coma de 3 horas e 3 hora', '16:30 tomar remedia'];
  constructor() {}
}
