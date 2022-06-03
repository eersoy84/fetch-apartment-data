import { Module } from '@nestjs/common';
import { GenericApiModule } from 'src/generic-api/generic-api.module';
import { InternalApiModule } from 'src/internal-api/internal-api.module';
import { IpfsModule } from 'src/ipfs/ipfs.module';
import { OpenseaModule } from 'src/opensea/opensea.module';
import { PinataModule } from 'src/pinata/pinata.module';
import { FetchApartmentController } from './fetch-apartment.controller';
import { FetchApartmentService } from './fetch-apartment.service';

@Module({
  imports: [OpenseaModule, IpfsModule, GenericApiModule, PinataModule, InternalApiModule],
  controllers: [FetchApartmentController],
  providers: [FetchApartmentService],
})
export class FetchApartmentModule {}
