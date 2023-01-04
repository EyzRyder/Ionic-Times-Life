import { TabsPage } from './../../tabs/tabs.page';
import { WorkoutService } from './../../services/workout.service';
import { AddTreinoPage } from './../treinos/add-treino/add-treino.page';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.page.html',
  styleUrls: ['./metas.page.scss'],
})
export class MetasPage implements OnInit {
  public treinos = [];

  constructor(
    public tabsPage: TabsPage,
    public router: Router,
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,

  ) { 
  this.getTreino();
  }

  ngOnInit() {
  }

  getTreino() {
    try{
      this.workoutService.findTreino(this.tabsPage.user.id).subscribe(dadosRetorno => {
        this.treinos = dadosRetorno.payload.data()['treinos'];
        console.log(this.treinos)
      }); 
    } catch(err){ console.log(err)}

  }

  async addNewTreino() {
    const modal = await this.modalCtrl.create({
      component: AddTreinoPage
    })

    modal.onDidDismiss().then(newTreino => {
      if (!newTreino.data) { return }
      // console.log(this.treinos.length);
      this.workoutService.addTreino(newTreino.data, this.treinos, this.tabsPage.user.id);
      // this.treinos[this.treinos.length] = newTreino.data;
      console.log(newTreino.data,' - ' , this.tabsPage.user.id);

    })
    return await modal.present();
  }

  openTreino(treino) {
    const navigationExtras: NavigationExtras = { state: { paramFilme: treino } };
    this.router.navigate(['treino'], navigationExtras);
  }

  deleteTreino(i) {
    console.log(i);
    this.workoutService.deleteTreino(i, this.treinos, this.tabsPage.user.id);
  }

}
