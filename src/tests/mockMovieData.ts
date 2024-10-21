import { Movie } from "../entities/models";

export const mockedMovies: Movie[] = [
  {
    year: 1980,
    title: "Can't Stop the Music",
    studios: [{ name: "Associated Film Distribution" }],
    producers: [{ name: "Allan Carr" }],
    winner: true,
  },
  {
    year: 1981,
    title: "Mommie Dearest",
    studios: [{ name: "Paramount Pictures" }],
    producers: [{ name: "Allan Carr" }],
    winner: true,
  },
  {
    year: 1982,
    title: "Inchon",
    studios: [{ name: "MGM" }],
    producers: [{ name: "Mitsuharu Ishii" }],
    winner: true,
  },
  {
    year: 1983,
    title: "The Lonely Lady",
    studios: [{ name: "Universal Studios" }],
    producers: [{ name: "Robert R. Weston" }],
    winner: true,
  },
  {
    year: 1984,
    title: "Bolero",
    studios: [{ name: "Cannon Films" }],
    producers: [{ name: "Bo Derek" }],
    winner: true,
  },
  {
    year: 1985,
    title: "Rambo: First Blood Part II",
    studios: [{ name: "Columbia Pictures" }],
    producers: [{ name: "Mitsuharu Ishii" }],
    winner: true,
  },
];
