import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModulesModule } from './modules/modules.module';
import { User } from './modules/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
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
      entities: [User],
      migrations: ['dist/migrations/*.js'],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ModulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
