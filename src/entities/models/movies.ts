import { Producer } from "./producer";
import { Studio } from "./studios";

export type Movie = {
  year: number;
  title: string;
  studios: Studio[];
  producers: Producer[];
  winner: boolean;
};
