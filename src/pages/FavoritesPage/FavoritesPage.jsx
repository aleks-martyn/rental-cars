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
    const ids = load(LOCALSTORAGE_KEY).map(item => item.id);

    setFavoriteCars(getFavoriteCars(ids, allCars));
    setError(null);
    setStatus('resolved');
  }, [allCars]);

  const handleLoadmoreBtnClick = () => console.log('Under development');

  const toggleFavorite = carId => {
    const storedFavorites = load(LOCALSTORAGE_KEY);

    const isFavorite = storedFavorites?.find(item => item.id === carId);

    if (isFavorite) {
      const index = storedFavorites?.findIndex(item => item.id === carId);

      if (index !== -1) storedFavorites?.splice(index, 1);
      save(LOCALSTORAGE_KEY, storedFavorites);

      const ids = storedFavorites?.map(item => item.id);
      setFavoriteCars(getFavoriteCars(ids, allCars));
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
