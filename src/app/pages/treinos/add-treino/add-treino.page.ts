import { Itreinos, Iexercicios } from './../../../modal/iTreino';
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
  exercicios=[];
  exercicioCount = 0;
  treino;

  constructor(
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,
  ) { }
  ngOnInit() {
  }
  addNewTreino() {
    // this.treino.nome = this.treinoName;
    // this.treino.num = this.exercicios.length;
    // this.treino.dificuldade = this.treinoPriority;
    // this.treino.exercicios = this.exercicios;
    this.treino = {
      nome: this.treinoName,
      num: this.exercicios.length,
      dificuldade: this.treinoPriority,
      exercicios: this.exercicios
    };

    this.modalCtrl.dismiss(this.treino);
  }

  async addNewExercicio() {
    const modal = await this.modalCtrl.create({
      component: AddExercicioPage
    })

    modal.onDidDismiss().then(newExercicios => {
      if (!newExercicios.data) { return }
      else {
        this.exercicios[this.exercicioCount] = newExercicios.data
        this.exercicioCount++;
      }
      console.log(newExercicios.data);

    })
    return await modal.present();
  }

}
