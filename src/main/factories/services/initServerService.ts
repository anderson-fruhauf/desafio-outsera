import { InitServerService } from "../../../application/services/initServerService";
import { GetFilmListFromCsv } from "../../../main/infra/csv/getFilmListFromCsv";
import { CreateManyMoviesDatabaseRepository } from "../../../main/infra/database/repositories/moviesRepository";
import { AppDataSource } from "../../infra/database";

export const makeInitServerService = () => {
  return new InitServerService(
    new CreateManyMoviesDatabaseRepository(),
    new GetFilmListFromCsv(),
    AppDataSource
  );
};
