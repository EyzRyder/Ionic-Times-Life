import { UserAuthService } from '../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userNameInput = '';
  emailInput = '';
  passwordInput = '';
  
  imc;
  sexo;
  dataNasc;
  idade;
  altura;
  peso;
  observacaoImc;
  headerText = 'Sign Up';

  constructor(
    public toastController: ToastController,
    public userAuthService: UserAuthService,
    private router: Router,
    private location: Location

  ) { }

  ngOnInit() {
    this.userAuthService.changeState('login');
  }

  submit() {
    if (!this.validateEmail(this.emailInput)) {
      this.presentToast('Por favor coloque um email valido', 'danger');
      return;
    }
    if (this.userAuthService.state != 'forgotPassword' && (this.passwordInput.length < 8 || this.passwordInput == "")) {
      this.presentToast('Password must be at least 8 characters', 'danger');
      return;
    }
    if (this.userAuthService.state == 'signup' && this.userNameInput == "") {
      this.presentToast('Por favor coloque um nome de usuário', 'danger');
      return;
    }

    //End of validation
    if (this.userAuthService.state == 'login') {
      this.userAuthService.login(this.emailInput, this.passwordInput).then(() => {
        this.presentToast("Você está logado", "success");
        this.location.back();
      });
    } else if (this.userAuthService.state == 'signup') {
      this.userAuthService.changeState('form');
      return
    } else if (this.userAuthService.state == 'forgotPassword') {
      this.userAuthService.sendForgotPassword(this.emailInput).then(() => {
        this.presentToast("Reset Password email has been sent", "success");
        this.location.back();
      });
    } else if (this.userAuthService.state == 'form') {

      if (!this.peso || this.peso < 0) {
        this.presentToast('Por favor digite seu peso', 'danger');
        return;
      } else if (!this.altura || this.altura < 0) {
        this.presentToast('Por favor digite sua altura', 'danger');
        return;
      } else if (!this.sexo) {
        this.presentToast('Por favor selecione seu gênero', 'danger');
        return;
      } else if (!this.dataNasc) {
        this.presentToast('Por favor coloque seu data de nascimento', 'danger');
        return;
      }

      this.userAuthService.createUser(this.emailInput, this.passwordInput, this.userNameInput, this.sexo, this.dataNasc.substring(0, 10), this.altura, this.peso).then(userData => {
        this.presentToast("Obrigado por se cadastrar", "success");
        this.location.back();
      }).catch(errorMsg => {
        this.presentToast(errorMsg, "danger");
      });
    }
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
  }

  async presentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 5000,
      color: color
    })
    toast.present();
  }
}
