import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

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

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((res: any) => {
      this.popularMovies = res.results;
    });
    this.moviesService.getMovies('upcoming').subscribe((res: any) => {
      this.upComingMovies = res.results;
    });
    this.moviesService.getMovies('top_rated').subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });
  }
}
