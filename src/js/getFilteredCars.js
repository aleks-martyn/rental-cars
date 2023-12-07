import { getModifiedPrice } from './getModifiedPrice';
import { getModifiedMileage } from './getModifiedMileage';

export const getFilteredCars = (
  cars,
  { brand, price, minMileage, maxMileage }
) => {
  if (cars.length === 0) return;

  const filteredCars = cars.filter(({ make, rentalPrice, mileage }) => {
    const modifiedPrice = getModifiedPrice(rentalPrice);
    const modifiedMinMileage = getModifiedMileage(minMileage);
    const modifiedMaxMileage = getModifiedMileage(maxMileage);

    if (brand !== 'Enter the text' && make !== brand) {
      return false;
    }

    if (price !== 'To $' && modifiedPrice > price) {
      return false;
    }

    if (modifiedMinMileage !== 0 && modifiedMinMileage > mileage) {
      return false;
    }

    if (modifiedMaxMileage !== 0 && modifiedMaxMileage < mileage) {
      return false;
    }

    return true;
  });

  return filteredCars;
};
