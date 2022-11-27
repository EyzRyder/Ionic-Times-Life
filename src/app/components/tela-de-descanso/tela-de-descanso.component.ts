import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';

@Component({
  selector: 'app-tela-de-descanso',
  templateUrl: './tela-de-descanso.component.html',
  styleUrls: ['./tela-de-descanso.component.scss'],
})
export class TelaDeDescansoComponent implements OnInit {
  ss: number = 20;
  mm: number = 0;
  hh: number = 0;
  temp: any;
  
  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() { 
    this.ss = 20;
    this.start();

  }

  timeBack() {

    if (this.ss == 0) {
        clearInterval(this.temp);
      this.modalCtrl.dismiss();
      // this.hh; this.mm; this.ss; return
  // console.log(this.ss);
    } 
  }
  
  start() {
    this.temp = setInterval(() => { this.timer(); }, 1000);
  }

  timer() {
    if (this.ss == 0) {
      clearInterval(this.temp);
      return this.modalCtrl.dismiss();
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

}
