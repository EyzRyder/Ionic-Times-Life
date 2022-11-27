import { AlertController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {
  treinos = [
    {
      nome: 'Braço',
      num: '28',
      dificuldade: 'Avançado',
      exercicios: [
        {
          nome: 'Pular Corda',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2014/07/pular-corda-emagrece.jpg.webp'
        },
        {
          nome: 'Flexões Militar',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'https://blog.eumilitar.com/wp-content/uploads/2021/05/militar-flex-03-min-300x281.jpg'
        },
      ]
    },
    {
      nome: 'Perna',
      num: '20',
      dificuldade: 'Avançado',
      exercicios: [
        {
          nome: 'Pular Corda',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2014/07/pular-corda-emagrece.jpg.webp'
        },
        {
          nome: 'Flexões Militar',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'https://blog.eumilitar.com/wp-content/uploads/2021/05/militar-flex-03-min-300x281.jpg'
        },
      ]
    },
  ];
  constructor(
    public appComponent: AppComponent,
    public userAuthService: UserAuthService,
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
  ) { }

  ngOnInit() {
  }


  // exibirFilme(filme: Ifilme) {
  //   const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
  //   this.router.navigate(['filme-detalhe'], navigationExtras);
  // }

  openTreino(treino) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: treino } };
    this.router.navigate(['treino'], navigationExtras);
  }

}
