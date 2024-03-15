import { Movie } from './movie.interface';

export interface CRUEmission {
  movieTo: Movie;
  typeOfAction: 'update' | 'create';
}
