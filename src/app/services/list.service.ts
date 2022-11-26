import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list = {
    pesoBaixo: {
      nome: 'Peso Baixo',
      descrition: 'Segundo o cálculo do IMC, o cálculo entre o seu peso e altura é abaixo do recomendado. Este valor pode ser um indicativo de alguma carência nutricional.',
    },
    pesoNormal: {
      nome: 'Peso Normal',
      descrition: 'De acordo com o cálculo do IMC, o seu peso está dentro da normalidade.Mantenha - o, seguindo uma dieta adequada e a praticando exercício físico com alguma regularidade.',
    },
    preObesidade: {
      nome: 'Pré obesidade',
      descrition: 'Tem algum excesso de peso em relação à sua altura. Comece por praticar exercício físico adequado, e melhorar os seus hábitos alimentares. A mudança está nas suas mãos!.',
    },
    obesidade: {
      nome: 'Obesidade',
      descrition: 'De acordo com o seu IMC, tem excesso de peso – obesidade. Consulte o seu médico de família para iniciar uma programa de perda de peso e melhorar a sua saúde.',
    },
    obesidadeGrave: {
      nome: 'Obesidade Grave',
      descrition: 'O seu peso é índice de obesidade mórbida, o que poderá trazer agravamentos à sua saúde. Consulte o seu médico para conseguir ajuda.',
    }
  };
  listDoc;
  // public listObservable: BehaviorSubject<any>;


  constructor(
    
    // public auth: AngularFireAuth,
    // public db: AngularFirestore
  ) {
    // this.listObservable = new BehaviorSubject(null);
  }



  // real time collection data
//   onSnapshot(q, (snapshot)=> {
//     let books = [];
//     snapshot.docs.forEach((doc) => {
//       books.push({...doc.data})
//     });
// console.log(books)
// } );

  // getList() {
  //   this.list = this.db.collection("checagemImc").doc("objetcIMC");

  //   this.list.get().then((doc) => {
  //     if (doc) {
  //       this.listDoc = doc.data();
  //       this.listObservable.next(this.listDoc); return
  //       // console.log("Document data:", doc.data()); return
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!"); return
  //     }
  //   }).catch((error) => {
  //     console.log("Error getting document:", error); return
  //   });
  // }


  // getList() {
  //   this.list = this.db.collection("checagemImc").doc("objetcIMC");

  //   this.list.get().then((querySnapshot) => {

  //     querySnapshot.forEach((doc) => {
  //       this.listObservable.next(doc.data());
  //       console.log("doc=>", doc.data()); return
  //     });
  //   }).catch((error) => {
  //     console.log("Error getting documents: ", error);
  //   });
  // }
  // getList() {
  //   this.list = this.db.collection("checagemImc");

  //   this.list.get().then((querySnapshot) => {
  //     querySnapshot.docs.forEach(doc => {
  //       // console.log("doc=>", doc.data());
  //       return doc.data(); 
  //     })
  //     // this.listObservable.next(querySnapshot.docs);
  //     });
  // }
}
