import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RemoteConfig } from '@angular/fire/remote-config';
import {
  ApiResponse,
  MOVIE_APIS,
  Movie,
  REMOTE_CONFIGS,
} from '@muruna-app/shared';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { Observable, delay, of, take, tap } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { ErrorsService } from '../error/error.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private remoteConfig: RemoteConfig = inject(RemoteConfig);

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private errorService: ErrorsService
  ) {}

  private async getMoviesFromAPI(): Promise<Observable<ApiResponse>> {
    try {
      await fetchAndActivate(this.remoteConfig);
      const authToken = getValue(
        this.remoteConfig,
        REMOTE_CONFIGS.MOVIE_AUTHORIZATION_TOKEN
      ).asString();
      return this.http.get(MOVIE_APIS.GET_MOVIES, {
        headers: {
          Authorization: authToken,
        },
      }) as Observable<ApiResponse>;
    } catch (exception) {
      this.errorService.showSnackBarError();
      console.error(exception);
      return of({
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
      });
    }
  }

  public async syncMoviesAndSendToLocalStorage(): Promise<void> {
    (await this.getMoviesFromAPI())
      .pipe(
        take(1),
        tap((apiResponseMovies) => {
          this.storageService.syncNewDataWithStorage(apiResponseMovies.results);
        })
      )
      .subscribe();
  }
}
