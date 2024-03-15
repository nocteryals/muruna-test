import { Injectable, inject } from '@angular/core';
import { RemoteConfig } from '@angular/fire/remote-config';
import {
  ApiResponse,
  MOVIE_APIS,
  REMOTE_CONFIGS,
} from '@muruna-app/shared';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private remoteConfig: RemoteConfig = inject(RemoteConfig);

  constructor(
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

    public showSnackBarError(): void {
      this.translate
        .get('errors.generalError')
        .pipe(
          take(1),
          tap((a) => {
            this.snackBar.open(a);
          })
        )
        .subscribe();
    }

}
