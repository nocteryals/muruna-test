import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie, STORAGE_KEYS } from '@muruna-app/shared';
import { TranslateService } from '@ngx-translate/core';
import { take, tap } from 'rxjs';
import { ErrorsService } from '../error/error.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService,
    private errorService: ErrorsService
  ) {}

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
    const movies = localStorage.getItem(STORAGE_KEYS.MOVIES_KEY);
    let parsedMovies = (movies !== null ? JSON.parse(movies) : []) as Movie[];
    localStorage.setItem(
      STORAGE_KEYS.MOVIES_KEY,
      JSON.stringify(parsedMovies.filter((movie) => movie.id !== idToDelete))
    );
  }
}
