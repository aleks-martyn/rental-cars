import { useState, useEffect } from 'react';
import { fetchAllCars } from 'services/api';
import { CarList } from 'components/CarList';
import { getFavoriteCars } from 'js/getFavoriteCars';
import { getUniqueBrands } from 'js/getUniqueBrands';
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
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('Enter the text');
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  const [filteredCars, setFilteredCars] = useState([]);

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
  }, []);

  useEffect(() => {
    const storedFavorites = load(FAVORITES_KEY) ?? [];
    if (allCars.length === 0 || storedFavorites.length === 0) {
      return;
    } else {
      setFavoriteCars(getFavoriteCars(storedFavorites, allCars));
    }
  }, [allCars]);

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
    }

    const savedMaxMileage = load(MAX_MILEAGE);
    if (savedMaxMileage) {
      setMaxMileage(savedMaxMileage);
    }
  }, []);

  useEffect(() => {
    const brandFilter = ({ make }) => make === selectedBrand;

    const priceFilter = ({ rentalPrice }) => {
      const price = Number(
        rentalPrice.split('').slice(1, rentalPrice.length).join('')
      );
      return price <= selectedPrice;
    };

    const minMileageFilter = ({ mileage }) => {
      const carMinMileage = Number(minMileage.split('.').join(''));
      return carMinMileage <= mileage;
    };

    const maxMileageFilter = ({ mileage }) => {
      const carMaxMileage = Number(maxMileage.split('.').join(''));
      return mileage <= carMaxMileage;
    };

    if (favoriteCars.length === 0) return;

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage === '' &&
      maxMileage === ''
    ) {
      setFilteredCars(favoriteCars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage === '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(brandFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage === '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(priceFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage !== '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(minMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage === '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars.filter(maxMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage === '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(brandFilter).filter(priceFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage !== '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(brandFilter).filter(minMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage === '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars.filter(brandFilter).filter(maxMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage !== '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars.filter(priceFilter).filter(minMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage === '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars.filter(priceFilter).filter(maxMileageFilter);
      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage !== '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars
        .filter(minMileageFilter)
        .filter(maxMileageFilter);

      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage !== '' &&
      maxMileage === ''
    ) {
      const cars = favoriteCars
        .filter(brandFilter)
        .filter(priceFilter)
        .filter(minMileageFilter);

      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage === '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars
        .filter(brandFilter)
        .filter(priceFilter)
        .filter(maxMileageFilter);

      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice === 'To $' &&
      minMileage !== '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars
        .filter(brandFilter)
        .filter(minMileageFilter)
        .filter(maxMileageFilter);

      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand === 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage !== '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars
        .filter(priceFilter)
        .filter(minMileageFilter)
        .filter(maxMileageFilter);

      setFilteredCars(cars);
    }

    if (
      favoriteCars.length > 0 &&
      selectedBrand !== 'Enter the text' &&
      selectedPrice !== 'To $' &&
      minMileage !== '' &&
      maxMileage !== ''
    ) {
      const cars = favoriteCars
        .filter(brandFilter)
        .filter(priceFilter)
        .filter(minMileageFilter)
        .filter(maxMileageFilter);

      setFilteredCars(cars);
    }
  }, [favoriteCars, selectedBrand, selectedPrice, minMileage, maxMileage]);

  const toggleFavorite = id => {
    const storedFavorites = load(FAVORITES_KEY) ?? [];

    const isFavorite = storedFavorites.find(carId => carId === id);

    if (isFavorite) {
      const index = storedFavorites.findIndex(carId => carId === id);

      if (index !== -1) storedFavorites.splice(index, 1);
      save(FAVORITES_KEY, storedFavorites);

      setFavoriteCars(getFavoriteCars(storedFavorites, allCars));
    }
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
        save(MIN_MILEAGE, value);
        break;

      case 'max':
        setMaxMileage(value);
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
      {status === 'resolved' && (
        <CarList cars={filteredCars} toggleFavorite={toggleFavorite} />
      )}
      <LoadmoreBtn onClick={handleLoadmoreBtnClick} />
    </>
  );
}
