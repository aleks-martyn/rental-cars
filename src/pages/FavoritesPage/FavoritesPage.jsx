import { useState, useEffect } from "react";
import { fetchAllCars } from "../../services/api";
import { CarList } from "../../components/CarList";
import { getFavoriteCars } from "../../js/getFavoriteCars";
import { LoadmoreBtn } from "../../components/LoadmoreBtn";
import { Spinner } from "../../components/Loader";

export default function FavoritesPage() {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("pending");
  const LOCALSTORAGE_KEY = "favorite-cars";

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await fetchAllCars();
        const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        const ids = items?.map((item) => item.id);

        setFavoriteCars(getFavoriteCars(ids, res));
        setStatus("resolved");
      } catch (error) {
        setError(error);
        setStatus("rejected");
      }
    };

    getCars();
  }, []);

  const handleLoadmoreBtnClick = () => console.log("Under development)");

  return (
    <>
      {status === "pending" && <Spinner />}
      {status === "rejected" && <h3>{error.message}</h3>}
      {status === "resolved" && <CarList cars={favoriteCars} />}
      <LoadmoreBtn onClick={handleLoadmoreBtnClick} />
    </>
  );
}
