import { CollectionTokens } from './models/collectionTokens';
import { NftCollection } from 'schema';
import { Collection, Token } from '@worldwidewebb/shared-messages/nfts';

export type FilteredCollections = {
  nftCollection: NftCollection;
  collection: Collection;
  token: Token;
};

export type FilteredCollectionsWithUserId = {
  userId: string;
  filteredCollection: FilteredCollections;
};

export type ApartmentForAddressObj = {
  userId: string;
  apartment: Token;
};
export const FETCH_NFT_DATA_SERVICE = 'FETCH_NFT_DATA_SERVICE';
export const INTERNAL_API = 'INTERNAL_API';
