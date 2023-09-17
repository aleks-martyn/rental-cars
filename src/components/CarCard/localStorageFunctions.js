export const addCarToList = (localKey, carId) => {
  const results = [];

  try {
    const items = JSON.parse(localStorage.getItem(localKey));
    if (items) results.push(...items);

    const checking = results.find((result) => result.id === carId);

    if (!checking) results.push({ id: carId });
    localStorage.setItem(localKey, JSON.stringify(results));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCarFromList = (localKey, carId) => {
  try {
    const items = JSON.parse(localStorage.getItem(localKey));
    const index = items.findIndex((item) => item.id === carId);

    if (index !== -1) items.splice(index, 1);
    localStorage.setItem(localKey, JSON.stringify(items));
  } catch (error) {
    console.log(error.message);
  }
};
