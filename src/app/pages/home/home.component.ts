import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  movies: any = [];

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res: any) => {
      this.movies = res.results; 
    });
  }
}
