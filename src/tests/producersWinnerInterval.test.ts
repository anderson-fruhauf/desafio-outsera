import request from "supertest";
import { app, server } from "../server";
import { AppDataSource, MoviesEntity } from "../main/infra/database";

describe("producer winner intervals", () => {
  beforeAll((done) => {
    app.on("appStarted", () => done());
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
      min: [
        {
          followingWin: 1991,
          producer: "Joel Silver",
          interval: 1,
          previousWin: 1990,
        },
      ],
      max: [
        {
          followingWin: 2015,
          producer: "Matthew Vaughn",
          interval: 13,
          previousWin: 2002,
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
