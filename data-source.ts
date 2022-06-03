import { DataSource } from 'typeorm'

export const TypeORMConnection = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: process.env.NODE_ENV === 'development',
  logging: false,
  entities: [],
  subscribers: [],
  migrations: []
})

TypeORMConnection.initialize()
