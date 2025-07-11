import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //Siempre aca poner las nuevas carpetas para que se puedan usar en el swagger
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
