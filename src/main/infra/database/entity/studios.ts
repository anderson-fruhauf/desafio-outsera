import {
  BaseEntity,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { MoviesEntity } from "./movies";

@Entity({ name: "studios" })
export class StudioEntity extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @ManyToMany(() => MoviesEntity, { cascade: ["insert"] })
  @JoinTable({ name: "movies_studios" })
  movies: MoviesEntity[];
}
