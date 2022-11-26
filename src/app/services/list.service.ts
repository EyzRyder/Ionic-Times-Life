import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list;
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
