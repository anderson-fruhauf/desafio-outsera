import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: ["src/main/infra/database/entity/*.ts"],
  subscribers: [],
  migrations: [],
});
