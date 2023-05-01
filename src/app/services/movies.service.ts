import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
   return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=789b2ff1e4396fe6c7bb147c0a0bedcf')
  }
}
