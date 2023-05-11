import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo
} from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilar(id);
    });
  }

  ngOnDestroy() {}

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

  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }
  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
  getMovieSimilar(id: string) {
    this.movieService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }
}
