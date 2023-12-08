import { useState, useEffect, useRef, useMemo } from 'react';
import { debounce } from 'lodash';
import { fetchAllCars } from 'services/api';
import { CarList } from 'components/CarList';
import { getFavoriteCars } from 'js/getFavoriteCars';
import { getUniqueBrands } from 'js/getUniqueBrands';
import { getFilteredCars } from 'js/getFilteredCars';
import { load, save, remove } from 'js/localStorageFunctions';
import useLocalStorage from 'hooks/useLocalStorage';
import { Spinner } from 'components/Loader';
import { DropdownMenu } from 'components/DropdownMenu';
import {
  FAVORITES_KEY,
  SELECTED_BRAND,
  SELECTED_PRICE,
  MIN_MILEAGE,
  MAX_MILEAGE,
  Status,
} from 'constants';

export default function FavoritesPage() {
  const [allCars, setAllCars] = useState([]);
  const [storedFavoritesIds, setStoredFavoritesIds] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useLocalStorage(
    SELECTED_BRAND,
    'Enter the text'
  );
  const [selectedPrice, setSelectedPrice] = useLocalStorage(
    SELECTED_PRICE,
    'To $'
  );
  const [minMileage, setMinMileage] = useLocalStorage(MIN_MILEAGE, '');
  const [maxMileage, setMaxMileage] = useLocalStorage(MAX_MILEAGE, '');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.PENDING);
  const [filterMinMileage, setFilterMinMileage] = useLocalStorage(
    MIN_MILEAGE,
    ''
  );
  const [filterMaxMileage, setFilterMaxMileage] = useLocalStorage(
    MAX_MILEAGE,
    ''
  );

  const debounsedMinMileage = useRef(
    debounce(value => setFilterMinMileage(value), 300)
  ).current;

  const debounsedMaxMileage = useRef(
    debounce(value => setFilterMaxMileage(value), 300)
  ).current;

  useEffect(() => {
    fetchAllCars()
      .then(res => {
        setAllCars(res);
        setError(null);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });

    setStoredFavoritesIds(load(FAVORITES_KEY) ?? []);
  }, []);

  useEffect(() => {
    setFavoriteCars(getFavoriteCars(storedFavoritesIds, allCars));
  }, [allCars, storedFavoritesIds]);

  useEffect(() => {
    return () => {
      debounsedMinMileage.cancel();
      debounsedMaxMileage.cancel();
    };
  }, [debounsedMinMileage, debounsedMaxMileage]);

  const filteredCars = useMemo(() => {
    const filter = {
      brand: selectedBrand,
      price: selectedPrice,
      minMileage: filterMinMileage,
      maxMileage: filterMaxMileage,
    };

    return getFilteredCars(favoriteCars, filter);
  }, [
    favoriteCars,
    selectedBrand,
    selectedPrice,
    filterMinMileage,
    filterMaxMileage,
  ]);

  const toggleFavorite = id => {
    const newFavoritesIds = storedFavoritesIds.filter(carId => carId !== id);

    setStoredFavoritesIds(newFavoritesIds);

    save(FAVORITES_KEY, newFavoritesIds);
  };

  const handleChange = (id, value) => {
    switch (id) {
      case 'brand':
        setSelectedBrand(value);
        save(SELECTED_BRAND, value);
        break;

      case 'price':
        setSelectedPrice(Number(value));
        save(SELECTED_PRICE, Number(value));
        break;

      case 'min':
        setMinMileage(value);
        debounsedMinMileage(value);
        save(MIN_MILEAGE, value);
        break;

      case 'max':
        setMaxMileage(value);
        debounsedMaxMileage(value);
        save(MAX_MILEAGE, value);
        break;

      default:
        return;
    }
  };

  const handleReset = () => {
    setSelectedBrand('Enter the text');
    setSelectedPrice('To $');
    setMinMileage('');
    setMaxMileage('');
    setFilterMinMileage('');
    setFilterMaxMileage('');

    remove(SELECTED_BRAND);
    remove(SELECTED_PRICE);
    remove(MIN_MILEAGE);
    remove(MAX_MILEAGE);
  };

  return (
    <>
      <DropdownMenu
        brands={getUniqueBrands(favoriteCars)}
        onFilterChange={handleChange}
        onFilterReset={handleReset}
        selectedBrand={selectedBrand}
        selectedPrice={selectedPrice}
        minMileage={minMileage}
        maxMileage={maxMileage}
      />
      {status === Status.PENDING && <Spinner />}
      {status === Status.REJECTED && <h3>{error?.message}</h3>}
      {status === Status.RESOLVED && filteredCars?.length > 0 && (
        <CarList cars={filteredCars} toggleFavorite={toggleFavorite} />
      )}
    </>
  );
}
