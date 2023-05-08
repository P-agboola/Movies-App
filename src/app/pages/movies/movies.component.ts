import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  constructor(private moviesService: MoviesService) {}

  movies: Movie[] = [];

  ngOnInit(): void {
    this.moviesService.searchMovies(2).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
