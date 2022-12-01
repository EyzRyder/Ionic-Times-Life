import { UserAuthService } from './../../services/user-auth.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { TabsPage } from './../../tabs/tabs.page';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Health } from '@awesome-cordova-plugins/health/ngx';
import { Chart, scales } from 'chart.js/auto';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.page.html',
  styleUrls: ['./dashborad.page.scss'],
})
export class DashboradPage implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;

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

  dailySteps = [];
  weeklySteps = [];
  monthlySteps = [];

  requestedPermissions: string[] = [
    'android.permission.ACTIVITY_RECOGNITION',
    'android.permission.BODY_SENSORS',
    'android.permission.ACCESS_FINE_LOCATION',
  ];

  dataTypes: string[] = ['steps', 'weight', 'heart_rate'];

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
    //this.requestPermissions();
    //this.requestAuthorization();
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

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
            this.getTotalDailySteps();
            this.getLastHeartRate();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getTotalDailySteps() {
    this.health
      .queryAggregated({
        startDate: new Date(),
        endDate: new Date(),
        dataType: 'steps',
        bucket: 'day',
        filtered: true,
      })
      .then((arr) => {
        arr.forEach((res) => {
          this.totalDailySteps = Number(res.value);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getLastHeartRate() {
    this.health
      .query({
        startDate: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000),
        endDate: new Date(),
        dataType: 'heart_rate',
        filtered: true,
      })
      .then((arr) => {
        arr.forEach((res) => {
          console.log(res);
          this.lastHeartRate = Number(res.value);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        datasets: [
          {
            data: [200, 50, 30, 15, 20, 34, 87],
            borderRadius: 8,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
      }
    });
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
