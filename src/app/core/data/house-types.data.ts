import type { HouseType } from '../models/HouseType';

export const HOUSE_TYPES: HouseType[] = [
  { id: 'apartment', rooms: ['living', 'bedroom', 'kitchen'] },
  { id: 'house', rooms: ['living', 'dining', 'bedroom', 'bedroom', 'bedroom', 'kitchen'] },
  { id: 'villa', rooms: ['living', 'dining', 'bedroom', 'bedroom', 'bedroom', 'bedroom', 'kitchen', 'veranda'] },
  { id: 'duplex', rooms: ['living', 'dining', 'bedroom', 'bedroom', 'bedroom', 'bedroom', 'kitchen', 'veranda'] },
  { id: 'multiStorey', rooms: ['living', 'dining', 'bedroom', 'bedroom', 'bedroom', 'bedroom', 'kitchen', 'veranda'] },
  { id: 'business', rooms: ['lounge', 'office'] },
];