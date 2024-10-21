import { WinnerIntervalsResponseDTO } from "../../entities/models";
import { IGetWinnersIntervalsRepository } from "../repositories";

export interface IGetProducersWinnerIntervalService {
  getIntervals: () => Promise<WinnerIntervalsResponseDTO>;
}

export class GetProducersWinnerIntervalService
  implements IGetProducersWinnerIntervalService
{
  constructor(
    private readonly getIntervalsRepository: IGetWinnersIntervalsRepository
  ) {}

  async getIntervals() {
    const winnerIntervals = await this.getIntervalsRepository.getAllIntervals();

    const intervals = winnerIntervals.map((item) => item.interval);

    const minInterval = Math.min(...intervals);
    const maxInterval = Math.max(...intervals);

    const itemsWithMinInterval = winnerIntervals.filter(
      (item) => item.interval === minInterval
    );

    const itemsWithMaxInterval = winnerIntervals.filter(
      (item) => item.interval === maxInterval
    );

    return {
      min: itemsWithMinInterval,
      max: itemsWithMaxInterval,
    };
  }
}
