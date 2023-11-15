export const getModifiedPrice = price =>
  Number(price.split('').slice(1, price.length).join(''));
