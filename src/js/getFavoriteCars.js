export const getFavoriteCars = (carIds, cars) => {
  if (!cars || !carIds || carIds.length === 0 || cars.length === 0) return [];

  const favoriteCars = [];

  for (const car of cars) {
    if (carIds.includes(car.id)) {
      favoriteCars.push(car);
    }
  }
  return favoriteCars;
};
