import { Apartment } from '@worldwidewebb/shared-messages/apartments';
/**
 * Metadata about the endpoint
 */
export interface ApartmentRevision {
  /**
   * Apartment revision number
   *
   * @example 123
   */
  revision: number;
}

export interface Draft extends Apartment {
  owner: string;
}

export interface ApartmentOwners {
  owners: ApartmentOwner[];
}

export interface ApartmentOwner {
  addressPair: string;
}

export interface Permissions {
  permissions: Permission[];
}

export interface Permission {
  apartmentId: string;
  currentOwnerAddressPair: string;
  permitToAddressPair: string;
  permission: PermissionType[];
  // default: boolean
}

export enum PermissionType {
  MANAGE = 'manage',
  EDIT = 'edit',
  ALLOW = 'allow',
  DENY = 'deny',
}
