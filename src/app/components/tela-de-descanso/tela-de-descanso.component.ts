import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { async } from '@firebase/util';

@Component({
  selector: 'app-tela-de-descanso',
  templateUrl: './tela-de-descanso.component.html',
  styleUrls: ['./tela-de-descanso.component.scss'],
})
export class TelaDeDescansoComponent implements OnInit {
  ss: number = 0;
  mm: number = 0;
  hh: number = 0;
  temp: any;
  
  constructor(
    public modalCtrl: ModalController,
    public router: Router,
    public location: Location
  ) { }

  ngOnInit() { 
    // this.ss = 20;
    this.ss = 5;
    this.start();

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
