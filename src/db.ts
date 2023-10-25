import { DataSource } from 'typeorm'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "22540696",
    database: "typeorm",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})