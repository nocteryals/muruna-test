import { Injectable } from '@angular/core';
import { Movie, STORAGE_KEYS } from '@muruna-app/shared';
import { ErrorsService } from '../error/error.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private errorService: ErrorsService) {}

  public syncNewDataWithStorage(moviesToSave: Movie[]): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.MOVIES_KEY);
      localStorage.setItem(
        STORAGE_KEYS.MOVIES_KEY,
        JSON.stringify(moviesToSave)
      );
    } catch (exception) {
      this.errorService.showSnackBarError();
      console.error(exception);
    }
  }

  public getFullMovies(): Movie[] {
    try {
      const movies = localStorage.getItem(STORAGE_KEYS.MOVIES_KEY);
      return movies !== null ? JSON.parse(movies) : [];
    } catch (exception) {
      this.errorService.showSnackBarError();
      console.error(exception);
      return [];
    }
  }

  public removeMovie(idToDelete: number) {
    try {
      const movies = localStorage.getItem(STORAGE_KEYS.MOVIES_KEY);
      let parsedMovies = (movies !== null ? JSON.parse(movies) : []) as Movie[];
      localStorage.setItem(
        STORAGE_KEYS.MOVIES_KEY,
        JSON.stringify(parsedMovies.filter((movie) => movie.id !== idToDelete))
      );
    } catch (exception) {
      console.error(exception);
    }
  }

  public updateMovie(newMovie: Movie): void {
    try {
      const movies = localStorage.getItem(STORAGE_KEYS.MOVIES_KEY);
      let parsedMovies = (movies !== null ? JSON.parse(movies) : []) as Movie[];
      parsedMovies.map((movie) => {
        if (movie.id === newMovie.id) {
          movie.title = newMovie.title;
          movie.popularity = newMovie.popularity;
          movie.original_title = newMovie.original_title;
        }
      });

      localStorage.setItem(
        STORAGE_KEYS.MOVIES_KEY,
        JSON.stringify(parsedMovies)
      );
    } catch (exception) {
      console.error(exception);
    }
  }

  public saveMovie(newMovie: Movie): void {
    try {
      const movies = localStorage.getItem(STORAGE_KEYS.MOVIES_KEY);
      let parsedMovies = (movies !== null ? JSON.parse(movies) : []) as Movie[];
      parsedMovies.push(newMovie);
      localStorage.setItem(
        STORAGE_KEYS.MOVIES_KEY,
        JSON.stringify(parsedMovies)
      );
    } catch (exception) {
      console.error(exception);
    }
  }
}
