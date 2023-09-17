import axios from "axios";

const BASE_URL = "https://65030523a0f2c1f3faeb4bc2.mockapi.io/api";

export const fetchCars = async (page) => {
  const searchParams = new URLSearchParams({
    limit: 8,
    page: `${page}`,
  });

  const url = `${BASE_URL}/cars?${searchParams}`;

  const { data } = await axios.get(url);

  return data;
};

export const fetchAllCars = async () => {
  const url = `${BASE_URL}/cars?`;

  const { data } = await axios.get(url);

  return data;
};
