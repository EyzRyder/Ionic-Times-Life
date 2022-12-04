import { UserAuthService } from './../../services/user-auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { TabsPage } from './../../tabs/tabs.page';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit {
  @ViewChild('stepsBarCanvas') private stepsBarCanvas: ElementRef;
  @ViewChild('heartBarCanvas') private heartBarCanvas: ElementRef;
  stepsBarChart: any;
  heartLineChart: any;

  platformReady = false;
  hasData = true;

  nome;
  idade;
  peso;
  altura;
  sexo;
  dataNasc;
  imc = '0';
  steps;
  totalDailySteps = 0;
  lastHeartRate = 0;

  requestedPermissions: string[] = [
    'android.permission.ACTIVITY_RECOGNITION',
    'android.permission.BODY_SENSORS',
    'android.permission.ACCESS_FINE_LOCATION',
  ];

  dataTypes: string[] = ['steps', 'weight', 'heart_rate'];

  weekStepsData = [];
  heartRateData = [];

  constructor(
    private platform: Platform,
    public toastController: ToastController,
    public alertController: AlertController,
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,
    public androidPermissions: AndroidPermissions,
    public health: Health,
    public router: Router
  ) {
    this.requestPermissions();
    this.requestAuthorization();
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.requestAuthorization();
      event.target.complete();
    }, 2000);
  };

  ngOnInit() { }

  requestPermissions() {
    this.requestedPermissions.forEach((permission) => {
      this.androidPermissions.requestPermission(permission);
    });
  }

  async requestAuthorization() {
    const ready = !!(await this.platform.ready());
    if (ready) {
      this.health
        .isAuthorized(this.dataTypes)
        .then(() => {
          this.health.requestAuthorization(this.dataTypes).then(() => {
            this.getUserSteps();
            this.getUserHeartRate();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getUserSteps() {
    this.health.queryAggregated({
      startDate: new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
      endDate: new Date(),
      dataType: 'steps',
      bucket: 'day',
      filtered: true
    }).then((arr) => {
      arr.forEach(res => {
        this.weekStepsData.push({ startDate: res.startDate, endDate: res.endDate, value: res.value });
      });
      this.loadStepsBarChart();
    }).catch((err) => {
      console.log(err);
    });
  }

  getUserHeartRate() {
    this.health.query({
      startDate: new Date(new Date().getTime() - 1 * 9 * 60 * 60 * 1000),
      endDate: new Date(),
      dataType: 'heart_rate',
      filtered: true
    }).then((arr) => {
      arr.forEach((res) => {
        this.heartRateData.push({ startDate: res.startDate, endDate: res.endDate, value: res.value });
      });
      this.loadHeartLineChart();
    }).catch((err) => {
      console.log(err);
    });
  }

  loadStepsBarChart() {
    let labels = [];
    let data = [];

    this.weekStepsData.forEach(obj => {
      labels.push(obj.startDate.toLocaleTimeString('pt', { weekday: 'short' }).substring(0, 3).toLowerCase());
      data.push(obj.value);
    })
    this.stepsBarChart = new Chart(this.stepsBarCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Passos',
            data: data,
            borderRadius: 8,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              /*title: function (tooltipItem) {
                if (tooltipItem.length > 0) {
                  const item = tooltipItem[0];
                  let title = '';
                  
                  dates.forEach(date => {
                    if (item.label.indexOf(date.weekday)) {
                      title = date.weekday + ", " + date.day;
                    }
                  });
                  return title;             
                }
              },
              label: function (context) {
                let label = context.dataset.label || '';
                console.log(label);
                return label + ' passos';
              }*/
            }
          }
        },
      }
    });
  }

  loadHeartLineChart() {
    let labels = [];
    let data = [];

    this.heartRateData.forEach((obj) => {
      labels.push(obj.startDate.toLocaleTimeString('pt', { hour: '2-digit', minute: '2-digit' }));
      data.push(obj.value);
    });

    this.heartLineChart = new Chart(this.heartBarCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'bpm',
            data: data,
            borderWidth: 1,
            borderColor: '#a33f33',
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        }
      }
    })
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
}
