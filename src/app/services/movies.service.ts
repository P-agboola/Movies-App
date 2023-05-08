import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '789b2ff1e4396fe6c7bb147c0a0bedcf';

  getMovies(type:string = 'upcoming') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
