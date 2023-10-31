export const getUniqueBrands = cars => {
  if (cars)
    return cars
      .map(car => car.make)
      .filter((brand, index, array) => array.indexOf(brand) === index);
};
