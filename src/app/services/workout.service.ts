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
          nome: 'Modified push up to lower arms',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'http://d205bpvrqc9yn1.cloudfront.net/1421.gif'
        },
        {
          nome: 'Flexões Militar',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0662.gif'
        },
      ]
    },
    {
      nome: 'Abdomin',
      num: '20',
      dificuldade: 'Avançado',
      exercicios: [
        {
          nome: 'air bike',
          setTemp: 'temp',
          num: '00:30',
          imgUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0003.gif'
        },
        {
          nome: '3/4 sit-up',
          setTemp: 'set',
          num: 'x14',
          imgUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif'
        },
      ]
    },
  ];

  constructor() { }

  
}
