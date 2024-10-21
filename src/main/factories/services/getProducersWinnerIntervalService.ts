import { GetProducersWinnerIntervalService } from "../../../application/services";
import { GetWinnerIntervalsRepository } from "../../infra/database";

export const makeGetProducersWinnerIntervalService = () => {
  return new GetProducersWinnerIntervalService(
    new GetWinnerIntervalsRepository()
  );
};
