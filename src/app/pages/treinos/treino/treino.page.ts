import { TelaDeDescansoComponent } from './../../../components/tela-de-descanso/tela-de-descanso.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  treino: any;
  treinoAtual: number = 0;
  ss: number = 0;
  mm: number = 0;
  hh: number = 0; 
  temp: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.treino = getNav.extras.state.paramFilme;
      }
    });
  }

  async ComecarTreino(e) {
    const modal = await this.modalCtrl.create({
      component: TelaDeDescansoComponent
    })
    modal.onDidDismiss().then(newTask => {
      // console.log(newTaskObj.data);
      // this.toDoList.push(newTaskObj.data)
    })
    return await modal.present();
  }

  start() {
    this.temp = setInterval(() => { this.timer(); }, 1000);
  }

  timer() {
    this.ss++;
    if (this.ss == 60) {
      this.ss = 0;
      this.mm++;

      if (this.mm == 60) {
        this.mm = 0;
        this.hh++;
      }
    }
  }
}
