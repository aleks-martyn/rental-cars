import { useEffect, useState } from 'react';
import { fetchCars } from 'services/api';
import { getUniqueBrands } from 'js/getUniqueBrands';
import { load, save } from 'js/localStorageFunctions';
import { CarList } from 'components/CarList';
import { LoadmoreBtn } from 'components/LoadmoreBtn';
import { Spinner } from 'components/Loader';
import { DropdownFilter } from 'components/DropdownFilter';
import { FAVORITES_KEY } from 'constants';

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

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

  const toggleFavorite = id => {
    const storedFavorites = load(FAVORITES_KEY) ?? [];

    const isFavorite = storedFavorites?.find(carId => carId === id);

    if (isFavorite) {
      const index = storedFavorites?.findIndex(carId => carId === id);

      if (index !== -1) storedFavorites?.splice(index, 1);
      save(FAVORITES_KEY, storedFavorites);
    } else {
      storedFavorites?.push(id);
      save(FAVORITES_KEY, storedFavorites);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const brand = form.cars.value.trim();
    if (brand) console.log(brand);
    const price = form.prices.value;
    if (price) console.log(price);
    const from = form.from.value;
    if (from) console.log(from);
    const to = form.to.value;
    if (to) console.log(to);
    form.reset();
  };

  return (
    <>
      <DropdownFilter onSubmit={handleSubmit} brands={getUniqueBrands(cars)} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <CarList cars={cars} toggleFavorite={toggleFavorite} />
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
