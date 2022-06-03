import { Controller, Logger, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { FetchApartmentService } from './fetch-apartment.service';

@Controller()
export class FetchApartmentController {
  constructor(private readonly fetchApartment: FetchApartmentService) {}

  @EventPattern('apartment.data.request')
  handleFetchNftData(@Payload(new ValidationPipe()) data: any) {
    this.fetchApartment.handleFetchApartmentData(data.value);
  }
}
