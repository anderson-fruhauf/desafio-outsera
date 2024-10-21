import { Router } from "express";
import { makeGetProducersWinnerIntervalService } from "../../factories";

export const producerRoute = Router();

const winnerIntervalsService = makeGetProducersWinnerIntervalService();

producerRoute.get("/winner-intervals", async (request, response) => {
  const data = await winnerIntervalsService.getIntervals();
  response.status(200).send(data);
});
