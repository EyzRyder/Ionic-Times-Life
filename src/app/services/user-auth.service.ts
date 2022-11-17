import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public isLoggedIn = false;
  public userObservable: BehaviorSubject<any>;
  public user = { auth: null, data: null };
  state = '';
  headerText = '';

  constructor(
    public auth: AngularFireAuth,
    public db: AngularFirestore
  ) {
    this.userObservable = new BehaviorSubject(null);
    this.updateUserState();
  }

  changeState(state) {
    this.state = state;
    if (this.state === 'login') {
      this.headerText = 'Login';
    } else if (this.state === 'signup') {
      this.headerText = 'Sign Up';
    } else if (this.state === 'forgotPassword') {
      this.headerText = 'Forgot Password';
    } else if (this.state === 'form') {
      this.headerText = 'Form';
    }
  }

  updateUserState() {
    this.auth.onAuthStateChanged(auth => {
      if (auth != null) {
        this.user.auth = auth;
        this.isLoggedIn = true;
        this.getUserFromEmail(auth.email).then(userData => {
          this.user.data = userData;
          console.log(this.user);
          this.userObservable.next(this.user.data);
        });
      } else {
        this.user.auth = null;
        this.user.data = null;
        this.isLoggedIn = false;
        console.log("logout");
        this.userObservable.next(null);
      }
      console.log("auth data has changed");
    })
  }

  public sendForgotPassword(email) {
    return new Promise((resolve, reject) => {
      this.auth.sendPasswordResetEmail(email).then(() => {
        resolve(true);
      })
    })
  }

  public logout() {
    this.auth.signOut();
  }

  public getUserFromEmail(email) {
    return new Promise((resolve, reject) => {
      this.db.collection('users', ref => ref.where('email', "==", email)).get().forEach((userList) => {
        userList.forEach(user => {
          resolve(user.data());
        })
      })
    })
  }

  public createUser(email, password, username, genero, dataNasc, altura, peso) {
    return new Promise((resolve, reject) => {
      this.checkUserName(username).then(isTaken => {
        if (isTaken) {
          reject("This user name already exists");
        } else {
          this.auth.createUserWithEmailAndPassword(email, password).then(userAuthData => {
            let user = {
              id: userAuthData.user.uid,
              email: email,
              username: username,
              genero: genero,
              dataNasc: dataNasc,
              altura: '',
              peso: '',
              imc: '',
              profilePic:'https://firebasestorage.googleapis.com/v0/b/times-new-life.appspot.com/o/img%2FAvatar.svg?alt=media&token=930a25ad-6a2b-449a-b4b2-694177b3206b',
            };
            this.db.collection("users").doc(user.id).set(user).then(userData => {
              resolve(userData);
            })
              .catch(error => {
                reject(error);
              })
            this.IMC(user.id, user, altura, peso);
          }).catch(error => {
            reject("This email is already in use");
          })
        }
      })
    })
  }

  public login(email, password) {
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password).then(() => {
        resolve(true);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  public checkUserName(username) {
    return new Promise((resolve, reject) => {
      this.db.collection("users", ref => ref.where("username", "==", username)).get().forEach(userList => {
        if (userList.size == 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      })
    })
  }

  public RegistrarDados(id, userData, sexo, dataNasc, altura, peso) {
    return new Promise((resolve, reject) => {
      let user = userData;
      user.genero = sexo;
      user.dataNasc = dataNasc;
      this.db.collection("users").doc(id).set(user).then(userData => {
        resolve(userData);
      })
        .catch(error => {
          reject(error);
        })
      this.IMC(id, userData, altura, peso);
    })
  }

  public IMC(id, userData, altura, peso) {
    return new Promise((resolve, reject) => {
      let IMC = (peso / (altura * altura)).toFixed(1);
      let user = userData;
      user.altura = altura;
      user.peso = peso;
      user.imc = IMC;
      this.db.collection("users").doc(id).set(user).then(userData => {
        resolve(userData);
      })
        .catch(error => {
          reject(error);
        })
    })
  }


}
