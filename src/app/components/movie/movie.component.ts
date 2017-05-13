import { Component, OnInit } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MoviesService]
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  getMovies(): void {
    this.moviesService.getMovies().then(movies => this.movies = movies);
  }

  ngOnInit() {
    this.getMovies();
  }

}
