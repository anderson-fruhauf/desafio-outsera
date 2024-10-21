import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
} from "typeorm";
import { ProducerEntity } from "./producer";
import { StudioEntity } from "./studios";
import { Producer, Studio } from "../../../../entities/models";

@Entity({ name: "movies" })
export class MoviesEntity extends BaseEntity {
  @PrimaryColumn()
  title: string;

  @Column()
  year: number;

  @ManyToMany(() => StudioEntity, { cascade: ["insert", "remove"] })
  @JoinTable({ name: "movies_studios" })
  studios: Studio[];

  @ManyToMany(() => ProducerEntity, { cascade: ["insert", "remove"] })
  @JoinTable({ name: "movies_producers" })
  producers: Producer[];

  @Column()
  winner: boolean;
}
