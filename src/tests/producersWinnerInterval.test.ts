import request from "supertest";
import { app, server } from "../server";
import { AppDataSource, MoviesEntity } from "../main/infra/database";
import { mockedMovies } from "./mockMovieData";

describe("producer winner intervals", () => {
  beforeAll((done) => {
    app.on("appStarted", async function () {
      await AppDataSource.createQueryBuilder()
        .delete()
        .from(MoviesEntity)
        .execute();

      const moviesToInsert = mockedMovies.map((item) =>
        MoviesEntity.create({ ...item })
      );
      await MoviesEntity.save(moviesToInsert);
      done();
    });
  });

  afterAll(async () => {
    await AppDataSource.destroy();
    server.close();
  });

  test("should return correct intervals", async () => {
    const response = await request(app).get(
      "/api/golden-raspberry-awards/producer/winner-intervals"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      max: [
        {
          followingWin: 1985,
          interval: 3,
          previousWin: 1982,
          producer: "Mitsuharu Ishii",
        },
      ],
      min: [
        {
          followingWin: 1981,
          interval: 1,
          previousWin: 1980,
          producer: "Allan Carr",
        },
      ],
    });
  });

  test("should return empty values", async () => {
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(MoviesEntity)
      .execute();

    const response = await request(app).get(
      "/api/golden-raspberry-awards/producer/winner-intervals"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      max: [],
      min: [],
    });
  });
});
