export const getUniqueBrands = cars =>
  cars
    .map(car => car.make)
    .filter((brand, index, array) => array.indexOf(brand) === index);
