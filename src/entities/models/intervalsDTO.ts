export type WinnerIntervalDTO = {
  followingWin: number;
  previousWin: number;
  interval: number;
  producer: number;
};

export type WinnerIntervalsResponseDTO = {
  min: WinnerIntervalDTO[];
  max: WinnerIntervalDTO[];
};
