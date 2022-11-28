import { AddExercicioPage } from './../add-exercicio/add-exercicio.page';
import { WorkoutService } from './../../../services/workout.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-treino',
  templateUrl: './add-treino.page.html',
  styleUrls: ['./add-treino.page.scss'],
})
export class AddTreinoPage implements OnInit {
  treinoName;
  treinoPriority;
  exercicios;

  constructor(
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,
  ) { }

  ngOnInit() {
  }

  async addNewExercicio() {
    const modal = await this.modalCtrl.create({
      component: AddExercicioPage
    })

    modal.onDidDismiss().then(newExercicios => {
      this.exercicios.push(newExercicios)
      console.log(newExercicios);

    })
    return await modal.present();
  }

}
