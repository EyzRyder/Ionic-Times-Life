import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit {
  nome: string;
  idade: number;
  peso: number;
  altura: number;
  sexo: string;
  imc;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async alertaEntrada() {
    const alert = await this.alertController.create({
      header: 'Insere',
      inputs: [
        {
          name: 'inputIdade',
          type: 'number',
          placeholder: 'Digite idade',
          max: 100,
          min: 1
        },
        {
          name: 'inputPeso',
          type: 'number',
          placeholder: 'Digite peso em kg',
        },
        {
          name: 'inputAltura',
          type: 'number',
          placeholder: 'Digite altura em m',
        },
        {
          name: 'inputNascimento',
          type: 'date',
          max: '2022-09-30',
          min: '1900-01-01'
        },
        {
          label: 'Masculino',
          type: 'radio',
          value: 'Masculino',
        },
        {
          label: 'Feminino',
          type: 'radio',
          value: 'Feminino',
        },
      ],
      buttons: [
        {
          text: 'ok',
          handler: (valor: any) => {
            this.idade = valor['inputIdade'];
            this.peso = valor['inputPeso'];
            this.altura = valor['inputAltura'];
            this.imc = ((this.peso / (this.altura * this.altura )).toFixed(1));
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
