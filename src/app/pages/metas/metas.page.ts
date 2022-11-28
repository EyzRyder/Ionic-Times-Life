import { WorkoutService } from './../../services/workout.service';
import { AddTreinoPage } from './../treinos/add-treino/add-treino.page';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {
  treinos : any;
  constructor(
    public userAuthService: UserAuthService,
    public router: Router,
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,

  ) { 
    this.treinos = this.workoutService.treinos;
  }

  ngOnInit() {
  }


  // exibirFilme(filme: Ifilme) {
  //   const navigationExtras: NavigationExtras = { state: { paramFilme: filme } };
  //   this.router.navigate(['filme-detalhe'], navigationExtras);
  // }

  async addNewTreino() {
    const modal = await this.modalCtrl.create({
      component: AddTreinoPage
    })

    modal.onDidDismiss().then(newTask => {
      console.log("added");

    })
    return await modal.present();
  }

  openTreino(treino) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: treino } };
    this.router.navigate(['treino'], navigationExtras);
  }

}
