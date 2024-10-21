import { IGetWinnersIntervalsRepository } from "../../../../application/repositories";
import { WinnerIntervalDTO } from "../../../../entities/models";
import { AppDataSource } from "../dataSource";

export class GetWinnerIntervalsRepository
  implements IGetWinnersIntervalsRepository
{
  async getAllIntervals() {
    const data = await AppDataSource.createQueryBuilder("movies", "m")
      .select("p.name", "producer")
      .addSelect("m.year", "followingWin")
      .addSelect(
        "m.year - LAG(m.year) OVER (PARTITION BY p.name ORDER BY m.year)",
        "interval"
      )
      .addSelect(
        "LAG(m.year) OVER (PARTITION BY p.name ORDER BY m.year)",
        "previousWin"
      )
      .innerJoin("movies_producers", "mp", "mp.moviesTitle = m.title")
      .innerJoin("producers", "p", "mp.producersName = p.name")
      .where("m.winner = :winner", { winner: true })
      .orderBy("interval", "DESC")
      .addOrderBy("m.year")
      .addOrderBy("p.name")
      .getRawMany();

    return data.filter((item) => item.interval) as WinnerIntervalDTO[];
  }
}
