import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbExercicioService {

  constructor(
    private httpClient: HttpClient,

  ) { }

  async fetchData(categoria, parte) {
    const responese = await fetch(`https://exercisedb.p.rapidapi.com/exercises/${categoria}/${parte}`, environment.ExerciseDB);
    const data = await responese.json();
    return data;
  }
}
