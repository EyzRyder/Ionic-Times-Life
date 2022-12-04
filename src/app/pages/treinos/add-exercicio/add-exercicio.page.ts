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
  exercicio ={};
  exercicioName;
  selectedtarget = 'corpo';
  selectedSetTime = 'set';
  bodyParts = [
    {
      nome: 'back',
      value: 'back'
    },
    {
      nome: 'cardio',
      value: 'cardio'
    },
    {
      nome: 'chest',
      value: 'chest'
    },
    {
      nome: 'lower arms',
      value: 'lower arms'
    },
    {
      nome: 'lower legs',
      value: 'lower legs'
    },
    {
      nome: 'neck',
      value: 'neck'
    },
    {
      nome: 'shoulders',
      value: 'shoulders'
    },
    {
      nome: 'upper arms',
      value: 'upper arms'
    },
    {
      nome: 'upper legs',
      value: 'upper legs'
    },
    {
      nome: 'waist',
      value: 'waist'
    }
  ];

  muscleParts = [
    {
      nome: 'abductors',
      value: 'abductors'
    },
    {
      nome: 'abs',
      value: 'abs'
    },
    {
      nome: 'adductors',
      value: 'adductors'
    },
    {
      nome: 'biceps',
      value: 'biceps'
    },
    {
      nome: 'calves',
      value: 'calves'
    },
    {
      nome: 'cardiovascular system',
      value: 'cardiovascular system'
    },
    {
      nome: 'delts',
      value: 'delts'
    },
    {
      nome: 'forearms',
      value: 'forearms'
    },
    {
      nome: 'glutes',
      value: 'glutes'
    },
    {
      nome: 'hamstrings',
      value: 'hamstrings'
    },
    {
      nome: 'lats',
      value: 'lats'
    },
    {
      nome: 'levator scapulae',
      value: 'levator scapulae'
    },
    {
      nome: 'pectorals',
      value: 'pectorals'
    },
    {
      nome: 'quads',
      value: 'quads'
    },
    {
      nome: 'serratus anterior',
      value: 'serratus anterior'
    },
    {
      nome: 'spine',
      value: 'spine'
    },
    {
      nome: 'traps',
      value: 'traps'
    },
    {
      nome: 'triceps',
      value: 'triceps'
    },
    {
      nome: 'upper back',
      value: 'upper back'
    },
  ];
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

    this.exercicio = {
      nome: this.exercicioName,
      setTemp: this.selectedSetTime,
      num: this.exercicioNum,
      gifUrl: 'oie',
    };

    this.modalCtrl.dismiss(this.exercicio);
  }
  segmentChange(e: any) {
    this.selectedtarget = e.target.value;
  }
  segmentSetTimeChange(e: any) {
    this.selectedSetTime = e.target.value;
  }
}
