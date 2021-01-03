import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  getJoke(){
    return this.http.get<Joke>(this.url+'/random_joke');
  }

}
