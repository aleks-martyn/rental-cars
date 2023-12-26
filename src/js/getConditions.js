export const getUpperData = (address, id, year, type) => [
  ...address,
  `Id: ${id}`,
  `Year: ${year}`,
  `Type: ${type}`,
];

export const getBottomData = (fuelConsumption, engineSize) => [
  `Fuel Consumption: ${fuelConsumption}`,
  `Engine Size: ${engineSize}`,
];

export const getUpperConditions = (age, condition) => [
  { name: 'Minimum Age', value: age },
  { name: null, value: condition },
];

export const getBottomConditions = (condition, mileage, price) => [
  { name: null, value: condition },
  { name: 'Mileage', value: mileage },
  { name: 'Price', value: price },
];
