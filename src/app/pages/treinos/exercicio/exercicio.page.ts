import { Location } from '@angular/common';
import { FinalTreinoComponent } from './../../../components/final-treino/final-treino.component';
import { Router, ActivatedRoute } from '@angular/router';
import { TelaDeDescansoComponent } from './../../../components/tela-de-descanso/tela-de-descanso.component';
import { ModalController } from '@ionic/angular';
import { WorkoutService } from './../../../services/workout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.page.html',
  styleUrls: ['./exercicio.page.scss'],
})
export class ExercicioPage implements OnInit {
  exercicio;
  ss: number = 0;
  mm: number = 0;
  hh: number = 0;
  temp: any;
  constructor(
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    
  ) { }

  ngOnInit() {

    this.exercicio = [];
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.exercicio = getNav.extras.state.paramFilme;
      }
    });

    if (this.exercicio[this.workoutService.treinoAtual - 1].setTemp == 'temp') {
      this.ss = this.exercicio[this.workoutService.treinoAtual - 1].num.substring(3, 5);
      this.start();
    }
    else if (this.exercicio[this.workoutService.treinoAtual - 1].setTemp == 'set') {

    }
    this.workoutService.count = Object.keys(this.exercicio).length
  }

  pauseButton() {
    clearInterval(this.temp);
  }


  async ComecarContator() {
    const modal = await this.modalCtrl.create({
      component: TelaDeDescansoComponent
    })
    modal.onDidDismiss().then(newTask => {

      if (this.workoutService.treinoAtual >= this.workoutService.count+1) {
        return
      } else {
        this.workoutService.treinoAtual++;
      }

    })
    return await modal.present();
  }
  async final() {
    const modal = await this.modalCtrl.create({
      component: FinalTreinoComponent
    })
    modal.onDidDismiss().then(newTask => {
      this.workoutService.treinoAtual = 0;
      this.location.back();
    })
    return await modal.present();
  }


  start() {
    this.temp = setInterval(() => { this.timer(); }, 1000);
  }

  timer() {
    if (this.ss == 0) {
      clearInterval(this.temp);
      return this.ComecarContator();
    } else {
      this.ss--;
      if (this.ss == 60) {
        this.ss = 0;
        this.mm--;

        if (this.mm == 60) {
          this.mm = 0;
          this.hh--;
        }
      }
    }
  }

  voltarExercicio() { }
  proximoExercicio() { 
    if (this.workoutService.treinoAtual == this.workoutService.count) {
      this.workoutService.treinoAtual = 0;
      this.location.back();
      this.final();
    } else {
      clearInterval(this.temp);
      this.ComecarContator();
      // this.workoutService.treinoAtual++;
    }
  }

}
