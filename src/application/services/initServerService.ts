import { DataSource } from "typeorm";
import { CreateManyMoviesRepository } from "../repositories/createManyRepository";
import { GetAllMoviesRepository } from "../repositories/getFilmListRepository";

export interface IInitServerService {
  initialize: () => Promise<void>;
}

export class InitServerService implements IInitServerService {
  constructor(
    private readonly createManyMovie: CreateManyMoviesRepository,
    private readonly getAllMovies: GetAllMoviesRepository,
    private readonly dataSource: DataSource
  ) {}

  async initialize() {
    await this.dataSource.initialize();
    const movies = await this.getAllMovies.getAllMovies();
    await this.createManyMovie.createMany(movies);
  }
}
