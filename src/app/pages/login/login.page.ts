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
      this.presentToast('Please enter a valid email', 'danger');
      return;
    }
    if (this.userAuthService.state != 'forgotPassword' && (this.passwordInput.length < 8 || this.passwordInput == "")) {
      this.presentToast('Password must be at least 8 characters', 'danger');
      return;
    }
    if (this.userAuthService.state == 'signup' && this.userNameInput == "") {
      this.presentToast('Please enter a username', 'danger');
      return;
    }

    //End of validation
    if (this.userAuthService.state == 'login') {
      this.userAuthService.login(this.emailInput, this.passwordInput).then(() => {
        this.presentToast("You have login", "success");
        this.location.back();
      });
    } else if (this.userAuthService.state == 'signup') {
      this.userAuthService.createUser(this.emailInput, this.passwordInput, this.userNameInput).then(userData => {
        this.presentToast("thank you for signing up", "success");
        this.location.back();
      }).catch(errorMsg => {
        this.presentToast(errorMsg, "danger");
      });
    } else if (this.userAuthService.state == 'forgotPassword') {
      this.userAuthService.sendForgotPassword(this.emailInput).then(() => {
        this.presentToast("Reset Password email has been sent", "success");
        this.location.back();
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
