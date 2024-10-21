import {
  BaseEntity,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { MoviesEntity } from "./movies";

@Entity({ name: "producers" })
export class ProducerEntity extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @ManyToMany(() => MoviesEntity, { cascade: ["insert"] })
  @JoinTable({ name: "movies_producers" })
  movies: MoviesEntity[];
}
