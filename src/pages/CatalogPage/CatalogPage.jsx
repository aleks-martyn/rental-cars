import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { fetchCars } from 'services/api';
import { getUniqueBrands } from 'js/getUniqueBrands';
import { getFilteredCars } from 'js/getFilteredCars';
import { load, save, remove } from 'js/localStorageFunctions';
import { CarList } from 'components/CarList';
import { LoadmoreBtn } from 'components/LoadmoreBtn';
import { Spinner } from 'components/Loader';
import { DropdownMenu } from 'components/DropdownMenu';
import {
  FAVORITES_KEY,
  CATALOG_BRAND,
  CATALOG_PRICE,
  CATALOG_MIN_MILEAGE,
  CATALOG_MAX_MILEAGE,
} from 'constants';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const [selectedBrand, setSelectedBrand] = useState('Enter the text');
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [filterMinMileage, setFilterMinMileage] = useState('');
  const [filterMaxMileage, setFilterMaxMileage] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  const debounsedMinMileage = useRef(
    debounce(value => setFilterMinMileage(value), 300)
  ).current;

  const debounsedMaxMileage = useRef(
    debounce(value => setFilterMaxMileage(value), 300)
  ).current;

  useEffect(() => {
    fetchCars(page)
      .then(res => {
        page === 1 ? setCars(res) : setCars(prev => [...prev, ...res]);
        setError(null);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [page]);

  useEffect(() => {
    const savedBrand = load(CATALOG_BRAND);
    if (savedBrand) {
      setSelectedBrand(savedBrand);
    }

    const savedPrice = load(CATALOG_PRICE);
    if (savedPrice) {
      setSelectedPrice(savedPrice);
    }

    const savedMinMileage = load(CATALOG_MIN_MILEAGE);
    if (savedMinMileage) {
      setMinMileage(savedMinMileage);
      setFilterMinMileage(savedMinMileage);
    }

    const savedMaxMileage = load(CATALOG_MAX_MILEAGE);
    if (savedMaxMileage) {
      setMaxMileage(savedMaxMileage);
      setFilterMaxMileage(savedMaxMileage);
    }
  }, []);

  useEffect(() => {
    if (cars.length === 0) setFilteredCars([]);

    const filter = {
      brand: selectedBrand,
      price: selectedPrice,
      minMileage: filterMinMileage,
      maxMileage: filterMaxMileage,
    };

    setFilteredCars(getFilteredCars(cars, filter));
  }, [cars, selectedBrand, selectedPrice, filterMinMileage, filterMaxMileage]);

  useEffect(() => {
    return () => {
      debounsedMinMileage.cancel();
      debounsedMaxMileage.cancel();
    };
  }, [debounsedMinMileage, debounsedMaxMileage]);

  const toggleFavorite = id => {
    const storedFavoritesIds = load(FAVORITES_KEY) ?? [];

    const isFavorite = storedFavoritesIds.includes(id);

    if (isFavorite) {
      const index = storedFavoritesIds.findIndex(carId => carId === id);

      if (index !== -1) storedFavoritesIds.splice(index, 1);

      save(FAVORITES_KEY, storedFavoritesIds);
    } else {
      storedFavoritesIds.push(id);

      save(FAVORITES_KEY, storedFavoritesIds);
    }
  };

  const handleChange = (id, value) => {
    switch (id) {
      case 'brand':
        setSelectedBrand(value);
        save(CATALOG_BRAND, value);
        break;

      case 'price':
        setSelectedPrice(Number(value));
        save(CATALOG_PRICE, Number(value));
        break;

      case 'min':
        setMinMileage(value);
        debounsedMinMileage(value);
        save(CATALOG_MIN_MILEAGE, value);
        break;

      case 'max':
        setMaxMileage(value);
        debounsedMaxMileage(value);
        save(CATALOG_MAX_MILEAGE, value);
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

    remove(CATALOG_BRAND);
    remove(CATALOG_PRICE);
    remove(CATALOG_MIN_MILEAGE);
    remove(CATALOG_MAX_MILEAGE);
  };

  return (
    <>
      <DropdownMenu
        brands={getUniqueBrands(cars)}
        onFilterChange={handleChange}
        onFilterReset={handleReset}
        selectedBrand={selectedBrand}
        selectedPrice={selectedPrice}
        minMileage={minMileage}
        maxMileage={maxMileage}
      />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error?.message}</h3>}
      {status === 'resolved' && (
        <CarList cars={filteredCars} toggleFavorite={toggleFavorite} />
      )}
      {page < 4 && (
        <LoadmoreBtn
          onClick={() => {
            setPage(prev => prev + 1);
          }}
        />
      )}
    </>
  );
}
