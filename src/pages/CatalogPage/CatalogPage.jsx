import { useEffect, useState } from 'react';
import { fetchCars } from '../../services/api';
import { CarList } from '../../components/CarList';
import { LoadmoreBtn } from '../../components/LoadmoreBtn';
import { Spinner } from '../../components/Loader';
import { DropdownFilter } from '../../components/DropdownFilter';

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

  const allBrands = cars.map(car => car.make);
  const uniqueBrands = allBrands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );
  const brands = uniqueBrands.map(brand => {
    return { name: brand };
  });

  useEffect(() => {
    const getCars = async page => {
      try {
        const res = await fetchCars(page);
        setCars(res);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    };

    getCars(page);
  }, [page]);

  const handleLoadmoreBtnClick = () => {
    p += 1;
    setPage(p);
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
      <DropdownFilter onSubmit={handleSubmit} brands={brands} prices={prices} />
      {status === 'pending' && <Spinner />}
      {status === 'rejected' && <h3>{error.message}</h3>}
      {status === 'resolved' && <CarList cars={cars} />}
      {page < 4 && <LoadmoreBtn onClick={handleLoadmoreBtnClick} />}
    </>
  );
}
