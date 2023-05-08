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
    this.getPageMovies(1);
  }
  getPageMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }
  paginate(event: any) {
    this.getPageMovies(event.page + 1);
  }
}
