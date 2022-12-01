import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { UserAuthService } from '../../services/user-auth.service';
import { TabsPage } from './../../tabs/tabs.page';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  sexo;
  altura;
  peso;
  imc;
  dataNasc;
  selectedPage: string;

  constructor(
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,
    public alertController: AlertController,
    public toastController: ToastController,
  ) { 
    this.selectedPage = 'user';
  }

  segmentChange(e: any) {
    this.selectedPage = e.target.value;
  }
  ngOnInit() {
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


  async calcImc() {
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
        }
      ],
      buttons: [
        {
          text: 'ok',
          handler: (valor: any) => {
            this.altura = valor['inputAltura'];
            this.peso = valor['inputPeso'];


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

            this.userAuthService.IMC(this.tabsPage.user.id, this.tabsPage.user, this.altura, this.peso)

            this.imc = (this.peso / (this.altura * this.altura)).toFixed(1);

            this.exibirToast('Obrigado por responder', 'success');
          },
        },
      ],
    });
    await alert.present();
  }

}