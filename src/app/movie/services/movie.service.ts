import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { Movie } from "../models/movies.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private ROOT_URL = "http://localhost:3000/movies";

  constructor(private http: HttpClient) {}

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }
}
