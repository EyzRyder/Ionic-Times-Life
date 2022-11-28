import { DbExercicioService } from './../../../api/db-exercicio.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-add-exercicio',
  templateUrl: './add-exercicio.page.html',
  styleUrls: ['./add-exercicio.page.scss'],
})
export class AddExercicioPage implements OnInit {
  exercicios;
  exercicio;
  exercicioName;
  selectedtarget = 'corpo';
  selectedSetTime = 'set';
  treinoCorpo;
  treinoMusculo;
  exercicioNum;

  constructor(
    public modalCtrl: ModalController,
    public dbExercicioService: DbExercicioService,

  ) { }

  ngOnInit() {
    
  }

  onIonInfinite(ev) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 50);
  }

  async pesquisarExercicio() {
    if (this.selectedtarget == 'corpo') {
      const exData = await this.dbExercicioService.fetchData('bodyPart', this.treinoCorpo);
      this.exercicios = exData;
      console.log(this.exercicios);

    } else if (this.selectedtarget == 'musculo'){
      const exData = await this.dbExercicioService.fetchData('target', this.treinoMusculo);
      this.exercicios = exData;
      console.log(this.exercicios);

    } else {
      const exData = await this.dbExercicioService.fetchData('', '');
      this.exercicios = exData;
      console.log(this.exercicios);

    }
    
  }
  addNewExercicio() {
    //
  }
  segmentChange(e: any) {
    this.selectedtarget = e.target.value;
  }
  segmentSetTimeChange(e: any) {
    this.selectedSetTime = e.target.value;
  }
}
