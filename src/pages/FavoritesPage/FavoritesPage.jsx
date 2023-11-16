import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { fetchAllCars } from 'services/api';
import { CarList } from 'components/CarList';
import { getFavoriteCars } from 'js/getFavoriteCars';
import { getUniqueBrands } from 'js/getUniqueBrands';
import { getModifiedMileage } from 'js/getModifiedMileage';
import { getModifiedPrice } from 'js/getModifiedPrice';
import { load, save, remove } from 'js/localStorageFunctions';
import { LoadmoreBtn } from 'components/LoadmoreBtn';
import { Spinner } from 'components/Loader';
import { DropdownMenu } from 'components/DropdownMenu';
import {
  FAVORITES_KEY,
  SELECTED_BRAND,
  SELECTED_PRICE,
  MIN_MILEAGE,
  MAX_MILEAGE,
} from 'constants';

export default function FavoritesPage() {
  const [allCars, setAllCars] = useState([]);
  const [storedFavoritesIds, setStoredFavoritesIds] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('Enter the text');
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterMinMileage, setFilterMinMileage] = useState('');
  const [filterMaxMileage, setFilterMaxMileage] = useState('');

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
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });

    setStoredFavoritesIds(load(FAVORITES_KEY) ?? []);
  }, []);

  useEffect(() => {
    setFavoriteCars(getFavoriteCars(storedFavoritesIds, allCars));
  }, [allCars, storedFavoritesIds]);

  useEffect(() => {
    const savedBrand = load(SELECTED_BRAND);
    if (savedBrand) {
      setSelectedBrand(savedBrand);
    }

    const savedPrice = load(SELECTED_PRICE);
    if (savedPrice) {
      setSelectedPrice(savedPrice);
    }

    const savedMinMileage = load(MIN_MILEAGE);
    if (savedMinMileage) {
      setMinMileage(savedMinMileage);
      setFilterMinMileage(savedMinMileage);
    }

    const savedMaxMileage = load(MAX_MILEAGE);
    if (savedMaxMileage) {
      setMaxMileage(savedMaxMileage);
      setFilterMaxMileage(savedMaxMileage);
    }
  }, []);

  useEffect(() => {
    if (favoriteCars.length === 0) setFilteredCars([]);

    const cars = favoriteCars.filter(({ make, rentalPrice, mileage }) => {
      const price = getModifiedPrice(rentalPrice);
      const modifiedMinMileage = getModifiedMileage(filterMinMileage);
      const modifiedMaxMileage = getModifiedMileage(filterMaxMileage);

      if (selectedBrand !== 'Enter the text' && make !== selectedBrand) {
        return false;
      }

      if (selectedPrice !== 'To $' && price > selectedPrice) {
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

    setFilteredCars(cars);
  }, [
    favoriteCars,
    selectedBrand,
    selectedPrice,
    filterMinMileage,
    filterMaxMileage,
  ]);

  useEffect(() => {
    return () => {
      debounsedMinMileage.cancel();
      debounsedMaxMileage.cancel();
    };
  }, [debounsedMinMileage, debounsedMaxMileage]);

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

  const handleLoadmoreBtnClick = () => console.log('Under development');

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
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error?.message}</h3>}
      {status === 'resolved' && filteredCars.length > 0 && (
        <CarList cars={filteredCars} toggleFavorite={toggleFavorite} />
      )}
      <LoadmoreBtn onClick={handleLoadmoreBtnClick} />
    </>
  );
}
