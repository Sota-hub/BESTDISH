import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const fetchMyMenu = (id) => {
  const { data, error } = useSWR(`/dishes/menu/${id}`, fetcher);
  return {
    data,
    loading: !error && !data,
    error,
  };
};

export default fetchMyMenu;
