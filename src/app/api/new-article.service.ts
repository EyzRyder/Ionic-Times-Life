import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewArticleService {

  constructor(
    private httpClient: HttpClient,
  ) {
    //
  }

  getTopHeadLines(): Observable<any>{
    return this.httpClient.get(
      `${environment.news.url_base}top-headlines?country=br&apiKey=${environment.news.api_key}`
    )
  }

  getArticleByCategory(Category): Observable<any>{
    return this.httpClient.get(
      `${environment.news.url_base}top-headlines?country=br&category=${Category}&apiKey=${environment.news.api_key}`
    )
  }

}
