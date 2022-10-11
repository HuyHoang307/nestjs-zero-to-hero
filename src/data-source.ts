import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserMigration1665510158458 } from './migrations/1665510158458-UserMigration';
import { User } from './modules/users/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  replication: {
    master: {
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'hoang_store',
    },
    slaves: [
      {
        host: '127.0.0.2',
        port: 5432,
        username: 'postgres',
        password: '1',
        database: 'hoang_store',
      },
    ],
  },
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
