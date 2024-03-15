import { Movie } from './movie.interface';

export interface TableEmitter {
  movieTo: Movie;
  typeOfAction: 'delete' | 'update';
}
