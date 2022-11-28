import { DbExercicioService } from './../../../api/db-exercicio.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-exercicio',
  templateUrl: './add-exercicio.page.html',
  styleUrls: ['./add-exercicio.page.scss'],
})
export class AddExercicioPage implements OnInit {
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

 


  async pesquisarExercicio() {
    if (this.selectedtarget == 'corpo') {
      const exData = await this.dbExercicioService.fetchData('bodyPart', this.treinoCorpo);
      console.log(exData);

    } else if (this.selectedtarget == 'musculo'){
      const exData = await this.dbExercicioService.fetchData('target', this.treinoMusculo);
      console.log(exData);

    } else {
      const exData = await this.dbExercicioService.fetchData('', '');
      console.log(exData);

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
