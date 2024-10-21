import { Movie } from "../../entities/models";

export interface GetAllMoviesRepository {
  getAllMovies: () => Promise<Movie[]>;
}
