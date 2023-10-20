import { useEffect, useState } from 'react';
import { fetchCars } from 'services/api';
import { load, save } from 'js/localStorageFunctions'; 
import { CarList } from 'components/CarList';
import { LoadmoreBtn } from 'components/LoadmoreBtn';
import { Spinner } from 'components/Loader';
import { DropdownFilter } from 'components/DropdownFilter';
import { LOCALSTORAGE_KEY } from 'constants';

const prices = [
  { quantity: '30' },
  { quantity: '40' },
  { quantity: '50' },
  { quantity: '60' },
  { quantity: '70' },
  { quantity: '80' },
];

export default function CatalogPage() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');
  let p = page;

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

  const handleLoadmoreBtnClick = () => {
    setPage((p += 1));
  };

  const toggleFavorite = carId => {
    const storedFavorites = load(LOCALSTORAGE_KEY);

    const isFavorite = storedFavorites?.find(item => item.id === carId);

    if (isFavorite) {
      const index = storedFavorites?.findIndex(item => item.id === carId);

      if (index !== -1) storedFavorites?.splice(index, 1);
      save(LOCALSTORAGE_KEY, storedFavorites);
    } else {
      storedFavorites?.push({ id: carId });
      save(LOCALSTORAGE_KEY, storedFavorites);
    }
  };

  const allBrands = cars.map(car => car.make);

  const uniqueBrands = allBrands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );

  const brands = uniqueBrands.map(brand => {
    return { name: brand };
  });

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
      <DropdownFilter onSubmit={handleSubmit} brands={brands} prices={prices} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && (
        <CarList cars={cars} toggleFavorite={toggleFavorite} />
      )}
      {page < 4 && <LoadmoreBtn onClick={handleLoadmoreBtnClick} />}
    </>
  );
}
