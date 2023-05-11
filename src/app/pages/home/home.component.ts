import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private moviesService: MoviesService) {}
  popularMovies: Movie[] = [];
  upComingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularTvShows: Tv[] = [];

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upComingMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getTvs('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows;
    });
  }
}
