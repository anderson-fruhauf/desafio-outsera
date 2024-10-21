import { WinnerIntervalDTO } from "../../entities/models";

export interface IGetWinnersIntervalsRepository {
  getAllIntervals: () => Promise<WinnerIntervalDTO[]>;
}
