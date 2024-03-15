import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@muruna-app/services';
import { Movie } from '@muruna-app/shared';
import { CRUEmission } from 'libs/shared/src/lib/interfaces/cru-emission.interface';

@Component({
  selector: 'muruna-main-cru-section',
  templateUrl: './main-cru-section.component.html',
  styleUrls: ['./main-cru-section.component.scss'],
})
export class MainCruSectionComponent implements OnChanges {
  @Input() public movieTo?: Movie;
  @Output() public eventEmitter = new EventEmitter<CRUEmission>();
  @Output() public cancelEmitter = new EventEmitter();
  public movieForm: FormGroup;

  constructor(private storageService: StorageService) {
    this.movieForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      popularity: new FormControl('', [Validators.required]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.movieForm.setValue({
      title: changes['movieTo'].currentValue?.title || '',
      popularity: changes['movieTo'].currentValue?.popularity || '',
    });
  }

  public cancelProcess(): void {
    this.cancelEmitter.emit();
  }

  public saveMovie(): void {
    if (this.movieTo) {
      this.eventEmitter.emit({
        movieTo: {
          ...this.movieTo,
          title: this.movieForm.get('title')?.value,
          original_title: this.movieForm.get('title')?.value,
          popularity: this.movieForm.get('popularity')?.value,
        } as Movie,
        typeOfAction: 'update',
      });
    } else {
      this.eventEmitter.emit({
        movieTo: {
          adult: false,
          backdrop_path: '',
          genre_ids: [],
          id: -(this.storageService.getFullMovies().length + 1),
          media_type: '',
          original_language: '',
          original_title: this.movieForm.get('title')?.value,
          overview: '',
          popularity: this.movieForm.get('popularity')?.value,
          poster_path: '',
          release_date: new Date().toISOString(),
          title: this.movieForm.get('title')?.value,
          video: '',
          vote_average: 0,
          vote_count: 0,
        } as Movie,
        typeOfAction: 'create',
      });
    }
  }
}
