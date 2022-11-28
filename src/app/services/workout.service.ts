import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  treinoAtual: number = 0;
  count;
  treinos = [
    {
      nome: 'Braço',
      num: '28',
      dificuldade: 'Avançado',
      exercicios: [
        {
          nome: 'Pular Corda',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2014/07/pular-corda-emagrece.jpg.webp'
        },
        {
          nome: 'Flexões Militar',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'https://blog.eumilitar.com/wp-content/uploads/2021/05/militar-flex-03-min-300x281.jpg'
        },
      ]
    },
    {
      nome: 'Perna',
      num: '20',
      dificuldade: 'Avançado',
      exercicios: [
        {
          nome: 'Pular Corda',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'https://treinomestre.com.br/wp-content/uploads/2014/07/pular-corda-emagrece.jpg.webp'
        },
        {
          nome: 'Flexões Militar',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'https://blog.eumilitar.com/wp-content/uploads/2021/05/militar-flex-03-min-300x281.jpg'
        },
      ]
    },
  ];

  constructor() { }

  
}
