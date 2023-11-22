import { ApprovalStatus } from '../enums/approval-status.enum';
import { LocationType } from '../enums/location-type.enum';

export const Locations = [
  {
    id: 1,
    name: 'City General Hospital',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    address: '123 Health Street, Cityville',
    type: LocationType.HOS,
    status: ApprovalStatus.APPROVAL,
  },
  {
    id: 2,
    name: 'Elite High School',
    location: {
      latitude: 37.7833,
      longitude: -122.4324,
    },
    address: '456 Education Avenue, Townsville',
    type: LocationType.UNI,
    status: ApprovalStatus.DENY,
  },
  {
    id: 3,
    name: 'Central Park',
    location: {
      latitude: 37.8716,
      longitude: -122.2727,
    },
    address: '789 Recreation Lane, Green City',
    type: LocationType.PAR,
    status: ApprovalStatus.PENDING,
  },
  {
    id: 4,
    name: 'SuperMart Express',
    location: {
      latitude: 37.7955,
      longitude: -122.3937,
    },
    address: "101 Shopper's Lane, Megatown",
    type: LocationType.SPM,
    status: ApprovalStatus.APPROVAL,
  },
];
