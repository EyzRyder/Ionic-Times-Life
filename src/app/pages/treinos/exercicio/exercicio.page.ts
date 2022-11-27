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
  exercicio
  constructor(
    public modalCtrl: ModalController,
    public workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.exercicio = [];
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.exercicio = getNav.extras.state.paramFilme;
      }
    });

    console.log(this.exercicio);
  }


  async ComecarTreino(e) {
    const modal = await this.modalCtrl.create({
      component: TelaDeDescansoComponent
    })
    modal.onDidDismiss().then(newTask => {
      // console.log(newTaskObj.data);
      // this.toDoList.push(newTaskObj.data)
      this.workoutService.treinoAtual++;
    })
    return await modal.present();
  }
}
