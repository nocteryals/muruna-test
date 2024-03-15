import { Component, OnInit } from '@angular/core';
import { HttpService, StorageService } from '@muruna-app/services';
import { LANGUAGES, Movie, TableEmitter } from '@muruna-app/shared';
import { TranslateService } from '@ngx-translate/core';
import { CRUEmission } from 'libs/shared/src/lib/interfaces/cru-emission.interface';
import { take, tap } from 'rxjs';

@Component({
  selector: 'muruna-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public dataSource: Movie[];
  public isLoading: boolean;
  public showCruComponent: boolean;
  public currentMovieTo?: Movie;

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private translate: TranslateService
  ) {
    this.dataSource = [];
    this.isLoading = true;
    this.showCruComponent = false;
  }

  async ngOnInit(): Promise<void> {
    this.loadMoviesFromStorage();
  }

  public loadMoviesFromStorage(): void {
    this.dataSource = this.storageService.getFullMovies();
    this.isLoading = false;
  }

  public async syncWithService(): Promise<void> {
    this.isLoading = true;
    this.currentMovieTo = undefined;
    this.showCruComponent = false;
    await this.httpService.syncMoviesAndSendToLocalStorage();
    setTimeout(async () => {
      this.dataSource = this.storageService.getFullMovies();
      this.isLoading = false;
    }, 3000);
  }

  public async changeLanguage(): Promise<void> {
    this.translate.use(
      this.translate.currentLang === LANGUAGES.en ? LANGUAGES.es : LANGUAGES.en
    );
  }

  public processTableEmission(newTableEmission: TableEmitter): void {
    if (newTableEmission.typeOfAction === 'delete') {
      this.storageService.removeMovie(newTableEmission.movieTo.id);
      this.loadMoviesFromStorage();
    } else {
      this.currentMovieTo = newTableEmission.movieTo;
      this.showCruComponent = true;
    }
  }

  public createNewMovie(): void {
    this.currentMovieTo = undefined;
    this.showCruComponent = true;
  }

  public cancelCRUProcess(): void {
    this.showCruComponent = false;
  }

  public processCRUEmission(newCRUEmission: CRUEmission): void {
    if (newCRUEmission.typeOfAction === 'update') {
      this.storageService.updateMovie(newCRUEmission.movieTo);
      setTimeout(() => {
        this.loadMoviesFromStorage();
      }, 1000);
    } else {
      this.storageService.saveMovie(newCRUEmission.movieTo);
      setTimeout(() => {
        this.loadMoviesFromStorage();
      }, 1000);
    }
    this.currentMovieTo = undefined;
    this.showCruComponent = false;
  }
}
