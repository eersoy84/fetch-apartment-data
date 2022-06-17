import { Injectable, Logger } from '@nestjs/common';
import { OpenseaService } from 'src/opensea/opensea.service';
import { Token } from '@worldwidewebb/shared-messages/nfts';
import { ApartmentForAddressObj } from 'src/app.constants';
import { PermissionType } from 'src/models/apartments';
import { ApartmentSummary } from '@worldwidewebb/shared-messages/apartments';
import { WORLDWIDE_WEBB_APARTMENT_ADDRESS } from 'src/utils';
import { InternalApiService } from 'src/internal-api/internal-api.service';
import { OwnedApartment } from '@worldwidewebb/client-apartments';

@Injectable()
export class FetchApartmentService {
  private logger = new Logger(FetchApartmentService.name);
  constructor(private openSea: OpenseaService, private internalApi: InternalApiService) {
    this.logger.verbose('Initializing 3rd party Apis...');
  }

  async handleFetchApartmentData(apartmentForAddressObj: ApartmentForAddressObj) {
    const { userId, apartment } = apartmentForAddressObj;

    const ownedApartment: OwnedApartment = await this.getOwnedApartments(userId, apartment);
    this.logger.verbose('fetch apartment data microservice');
    console.log(ownedApartment);

    await this.internalApi.setOwnedApartment(ownedApartment);
  }

  private async getOwnedApartments(ownerId: string, apartment: Token): Promise<OwnedApartment> {
    let apartmentType = 'unknown';
    if (apartment.metadata) {
      const metadata = JSON.parse(apartment.metadata);
      const typeAttribute = metadata.attributes.filter((attribute: any) => attribute.trait_type == 'type');
      if (typeAttribute.length > 0 && typeAttribute[0].value) {
        apartmentType = typeAttribute[0].value.split(' ')[0];
      }
    }

    const thumbnailUri = await this.openSea.fetchOpenSeaThumbnailBase64(WORLDWIDE_WEBB_APARTMENT_ADDRESS, apartment.id);

    return {
      id: apartment.id,
      ownerId,
      apartmentType,
      thumbnailUri,
    };
  }
}
