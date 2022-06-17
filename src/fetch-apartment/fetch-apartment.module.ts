import { Module } from '@nestjs/common';
import { GenericApiModule } from 'src/generic-api/generic-api.module';
import { InternalApiModule } from 'src/internal-api/internal-api.module';
import { OpenseaModule } from 'src/opensea/opensea.module';
import { FetchApartmentController } from './fetch-apartment.controller';
import { FetchApartmentService } from './fetch-apartment.service';

@Module({
  imports: [OpenseaModule, GenericApiModule, InternalApiModule],
  controllers: [FetchApartmentController],
  providers: [FetchApartmentService],
})
export class FetchApartmentModule {}
