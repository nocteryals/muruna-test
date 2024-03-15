import { Movie } from './movie.interface';

export interface TableEmitter {
  movieToUpdateOrDelete: Movie;
  typeOfUpdate: 'delete' | 'update';
}
