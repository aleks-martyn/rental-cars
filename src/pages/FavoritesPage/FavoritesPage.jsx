import { useState, useEffect } from 'react';
import { fetchAllCars } from 'services/api';
import { CarList } from 'components/CarList';
import { getFavoriteCars } from 'js/getFavoriteCars';
import { load, save } from 'js/localStorageFunctions';
import { LoadmoreBtn } from 'components/LoadmoreBtn';
import { Spinner } from 'components/Loader';
import { DropdownMenu } from 'components/DropdownMenu';
import { LOCALSTORAGE_KEY } from 'constants';

export default function FavoritesPage() {
  const [allCars, setAllCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

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
    const storedFavorites = load(LOCALSTORAGE_KEY);

    setFavoriteCars(getFavoriteCars(storedFavorites, allCars));
    setError(null);
    setStatus('resolved');
  }, [allCars]);

  const handleLoadmoreBtnClick = () => console.log('Under development');

  const toggleFavorite = id => {
    const storedFavorites = load(LOCALSTORAGE_KEY);

    const isFavorite = storedFavorites?.find(carId => carId === id);

    if (isFavorite) {
      const index = storedFavorites?.findIndex(carId => carId === id);

      if (index !== -1) storedFavorites?.splice(index, 1);
      save(LOCALSTORAGE_KEY, storedFavorites);

      setFavoriteCars(getFavoriteCars(storedFavorites, allCars));
    }
  };

  const brands = ['Audi', 'Volvo', 'Buick'];

  return (
    <>
      <DropdownMenu brands={brands} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <CarList cars={favoriteCars} toggleFavorite={toggleFavorite} />
      )}
      <LoadmoreBtn onClick={handleLoadmoreBtnClick} />
    </>
  );
}
