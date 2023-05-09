import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieVideo } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }
}
