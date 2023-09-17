export const getFavoriteCars = (carIds, cars) => {
  if (!cars || !carIds || carIds.length === 0) return;

  const filteredCars = [];

  for (const car of cars) {
    if (carIds.includes(car.id.toString())) {
      filteredCars.push(car);
    }
  }
  return filteredCars;
};
