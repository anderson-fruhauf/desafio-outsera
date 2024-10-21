import { CreateManyMoviesRepository } from "../../../../application/repositories";
import { Movie } from "../../../../entities/models";
import { MoviesEntity } from "../entity/movies";

export class CreateManyMoviesDatabaseRepository
  implements CreateManyMoviesRepository
{
  async createMany(movies: Movie[]) {
    const moviesToInsert = movies.map((item) =>
      MoviesEntity.create({ ...item })
    );
    return MoviesEntity.save(moviesToInsert);
  }
}
