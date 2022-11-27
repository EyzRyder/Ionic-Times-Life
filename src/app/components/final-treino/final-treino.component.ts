import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-treino',
  templateUrl: './final-treino.component.html',
  styleUrls: ['./final-treino.component.scss'],
})
export class FinalTreinoComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

}
