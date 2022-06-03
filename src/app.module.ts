import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FetchApartmentModule } from './fetch-apartment/fetch-apartment.module';

@Module({
  imports: [ConfigModule.forRoot(), FetchApartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
