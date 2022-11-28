import { Location } from '@angular/common';
import { FinalTreinoComponent } from './../../../components/final-treino/final-treino.component';

import { WorkoutService } from './../../../services/workout.service';
import { TelaDeDescansoComponent } from './../../../components/tela-de-descanso/tela-de-descanso.component';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {
  treino: any;
  ss: number = 0;
  mm: number = 0;
  hh: number = 0;
  temp: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,
    private location: Location,

  ) {

  }

  ngOnInit() {
    this.treino = [];
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.treino = getNav.extras.state.paramFilme;
      }
    });

  }

  // async final() {
  //   const modal = await this.modalCtrl.create({
  //     component: FinalTreinoComponent
  //   })
  //   modal.onDidDismiss().then(newTask => {
  //     this.workoutService.treinoAtual = 0;
  //     this.location.back();
  //   })
  //   return await modal.present();
  // }


  async ComecarContator() {
    const modal = await this.modalCtrl.create({
      component: TelaDeDescansoComponent
    })
    modal.onDidDismiss().then(newTask => {
      // console.log(newTaskObj.data);
      // this.toDoList.push(newTaskObj.data)
      this.workoutService.treinoAtual++;
      const navigationExtras: NavigationExtras = { state: { paramFilme: this.treino.exercicios } };
      this.router.navigate(['exercicio'], navigationExtras);
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
