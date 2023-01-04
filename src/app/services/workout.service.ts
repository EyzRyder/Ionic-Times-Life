import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  treinoAtual: number = 0;
  count;
  // treinos = [
  //   {
  //     nome: 'Braço',
  //     num: '2',
  //     dificuldade: 'Avançado',
  //     exercicios: [
  //       {
  //         nome: 'Modified push up to lower arms',
  //         setTemp: 'temp',
  //         num: '00:30',
  //         gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1421.gif'
  //       },
  //       {
  //         nome: 'Flexões Militar',
  //         setTemp: 'set',
  //         num: 'x14',
  //         gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0662.gif'
  //       },
  //     ]
  //   },
  //   {
  //     nome: 'Abdomin',
  //     num: '2',
  //     dificuldade: 'Avançado',
  //     exercicios: [
  //       {
  //         nome: 'air bike',
  //         setTemp: 'temp',
  //         num: '00:30',
  //         gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif'
  //       },
  //       {
  //         nome: '3/4 sit-up',
  //         setTemp: 'set',
  //         num: 'x14',
  //         gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
  //       },
  //     ]
  //   },
  // ];

  constructor(private afs: AngularFirestore) { }

  addTreino(NewTreino, curTreinos, id) {
    let treinos = curTreinos;
    treinos.push(NewTreino);
    return this.afs.collection('treino').doc(id).set({ treinos: treinos });
    
  }

  findTreino(id) {
    return this.afs.collection('treino').doc(id).snapshotChanges();
  }

  deleteTreino(i, curTreinos, id) {
    let treinos = curTreinos;
    treinos.splice(i, 1); 

    return this.afs.collection('treino').doc(id).set({ treinos: treinos });
  }
  
}
