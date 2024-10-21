import { Movie } from "../../entities/models";

export interface CreateManyMoviesRepository {
  createMany: (movies: Movie[]) => Promise<Movie[]>;
}
