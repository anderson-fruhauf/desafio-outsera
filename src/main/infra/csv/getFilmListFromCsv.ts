import fs from "fs";
import csv from "csv-parser";
import { CSV_FILE_PATH } from "../../../constants";
import { Movie } from "../../../entities/models";
import { GetAllMoviesRepository } from "../../../application/repositories";

export class GetFilmListFromCsv implements GetAllMoviesRepository {
  async getAllMovies(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const movies: Movie[] = [];

      fs.createReadStream(CSV_FILE_PATH)
        .pipe(csv({ separator: ";" }))
        .on("data", (row) => {
          movies.push({
            year: parseInt(row.year),
            title: row.title,
            studios: row.studios
              .split(",")
              .map((studio: string) => ({ name: studio.trim() })),
            producers: row.producers
              .split(",")
              .map((producer: string) => ({ name: producer.trim() })),
            winner: row.winner === "yes",
          });
        })
        .on("end", async () => {
          resolve(movies);
        });
    });
  }
}
