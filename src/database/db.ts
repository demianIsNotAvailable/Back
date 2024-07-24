import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Author1719825025988 } from "./migrations/1719825025988-author";
import { User1719830260277 } from "./migrations/1719830260277-user";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [`${__dirname}/models/**/*{.js,.ts}`],
	// entities: [],
	// migrations: [Author1719825025988,User1719830260277],
	migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
	synchronize: false,
	logging: false,
});
