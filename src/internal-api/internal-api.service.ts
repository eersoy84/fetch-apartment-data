import { Inject, Injectable, Logger } from '@nestjs/common';
import { InternalApi, OwnedApartment } from '@worldwidewebb/client-apartments';
import { INTERNAL_API } from 'src/app.constants';

@Injectable()
export class InternalApiService {
  private readonly logger = new Logger(InternalApiService.name);

  constructor(@Inject(INTERNAL_API) private readonly internalApi: InternalApi) {
    this.logger.verbose('internal api initializing...');
  }
  async setOwnedApartment(ownedApartment: OwnedApartment) {
    try {
      console.log(ownedApartment);
      this.logger.verbose('Saving owned apartment to database');
      await this.internalApi.setOwnedApartment(ownedApartment.id, ownedApartment);
    } catch (err) {
      this.logger.error(
        `While saving  Owned Apartment ${ownedApartment} with ${ownedApartment.ownerId} to Database`,
        err,
      );
    }
  }
}
