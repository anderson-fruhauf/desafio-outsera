import express, { Router } from "express";
import { makeInitServerService } from "./main/factories";
import { producerRoute } from "./main/router";

export const app = express();
const router = Router();
app.use(express.json());
const initServerService = makeInitServerService();

router.use("/producer", producerRoute);
app.use("/api/golden-raspberry-awards", router);

initServerService.initialize().then(() => {
  app.emit("appStarted");
  console.log("database initialized");
});

export const server = app.listen(3333, () =>
  console.log("server running on port 3333")
);
