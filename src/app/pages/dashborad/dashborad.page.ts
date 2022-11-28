import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { TabsPage } from './../../tabs/tabs.page';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit {
  platformReady: boolean = false;
  hasData: boolean = true;

  nome;
  idade;
  peso;
  altura;
  sexo;
  dataNasc;
  imc;

  dailySteps = [];
  weeklySteps = [];
  monthlySteps = [];

  requestedPermissions: string[] = [
    'android.permission.ACTIVITY_RECOGNITION',
    'android.permission.BODY_SENSORS',
    'android.permission.ACCESS_FINE_LOCATION',
  ];

  dataTypes: string[] = ['steps'];

  constructor(
    private platform: Platform,
    public toastController: ToastController,
    public alertController: AlertController,
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService, 
    public androidPermissions: AndroidPermissions, 
    public health: Health,
    public router: Router,
  ) {
    this.requestPermissions();
    this.requestAuthorization();
  }

  ngOnInit() {
  }

  requestPermissions() {
    this.requestedPermissions.forEach((permission) => {
      this.androidPermissions.requestPermission(permission);
    });
  }
  
  async requestAuthorization() {
    const ready = !!await this.platform.ready();
    if (ready) {
      this.health.isAuthorized(this.dataTypes).then(() => {
        this.health.requestAuthorization(this.dataTypes).then(() => {
          this.getDailySteps();
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  getDailySteps() {
    this.health.query({
      startDate: new Date(new Date().setHours(0, 0, 0, 0)),
      endDate: new Date(),
      dataType: 'steps',
      limit: 1000,
      filtered: true
    }).then(arr => {
      arr.forEach(obj => {
        console.log(obj.value);
        let datePipe: DatePipe = new DatePipe('en-US');
        this.dailySteps.push({startDate: datePipe.transform(obj.startDate, 'HH:mm'), endDate: datePipe.transform(obj.endDate, 'HH:mm'), value: obj.value});
      });
    }).catch(err => {
      console.log(err);
    });
  }

  getWeeklySteps() {
    this.health.query({
      startDate: this.setToMonday(new Date()),
      endDate: this.setToFriday(new Date()),
      dataType: 'steps',
      limit: 1000,
      filtered: true
    }).then(arr => {
      arr.forEach(obj => {
        this.weeklySteps.push({startDate: obj.startDate.toISOString(), endDate: obj.endDate.toISOString(), value: obj.value});
      });
    }).catch(err => {
      console.log(err);
    });
  }

  setToMonday(date: Date) {
    let day = date.getDay() || 7;
    if (day !== 1) date.setHours(-24 * (day - 1));
    return date; 
  }

  setToFriday(date: Date) {
    let day = date.getDay() || 7;
    if (day !== 7) date.setHours(24 * (day + 1));
    return date;
  }

  getUserSteps(startDate: Date, endDate: Date) {
    this.health.query
  }

  getUserDailySteps() {

  }

  query() {

  }

  queryAggregated() {

  }

  async registrarUser() {
    const alert = await this.alertController.create({
      header: 'Insere seus dados',
      inputs: [
        {
          name: 'inputPeso',
          type: 'number',
          placeholder: 'Peso em Kg',
          max: 150,
          min: 30,
        },
        {
          name: 'inputAltura',
          type: 'number',
          placeholder: 'Altura em M',
          max: 220,
          min: 100,
        },
        {
          name: 'inputNascimento',
          type: 'date',
          max: '2022-11-26',
          min: '1900-01-01',
        },
      ],
      buttons: [
        {
          text: 'ok',
          handler: (valor: any) => {
            this.altura = valor['inputAltura'];
            this.peso = valor['inputPeso'];
            this.dataNasc = valor['inputNascimento'];

            this.altura = valor['inputAltura'];

            if (
              parseFloat(
                (
                  parseFloat(this.peso) /
                  (parseFloat(this.altura) * parseFloat(this.altura))
                ).toFixed(1)
              ) >= 40
            ) {
              this.alertaSimples(
                'Atenção',
                'Você está obeso',
                'MELHORE A SUA SAÚDE!'
              );
            }

            this.imc = (this.peso / (this.altura * this.altura)).toFixed(1);

            this.exibirToast('Obrigado por responder', 'success');
          },
        },
      ],
    });
    await alert.present();
  }

  async alertaEntrada() {
    const alert = await this.alertController.create({
      header: 'Selecione seu Gênero',
      inputs: [
        {
          type: 'radio',
          label: 'Masculino',
          value: 'M',
        },
        {
          type: 'radio',
          label: 'Feminina',
          value: 'F',
        },
      ],

      buttons: [
        {
          text: 'ok',
          handler: (valor: any) => {
            this.sexo = valor;
            this.registrarUser();
            // console.log(this.sexo);
          },
        },
      ],
    });

    await alert.present();
  }

  async alertaSimples(titulo, subtitulo, message) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: message,
      buttons: ['ok'],
    });

    await alert.present();
  }

  async exibirToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
    });
    toast.present();
  }

  showImc() {
    if (this.userAuthService.isLoggedIn == true) {
      return (this.imc = this.tabsPage.imc);
    } else {
      return this.imc;
    }
  }

  showPesoInfo() {
    if (this.imc < 20) {
      return;
    } else if (this.imc <= 25) {
      // this.userAuthService.getPesoInfo()
      // console.log(this.userAuthService.getPesoInfo());
      return;
    } else if (this.imc <= 30) {
      return;
    } else if (this.imc <= 40) {
      return;
    } else {
      return;
    }
  }
}
