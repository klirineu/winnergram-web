import useSWR from "swr";
import API from "../lib/axios";

const useFetch = (url) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      const { data } = await API.get(url);

      return data;
    },
    { suspense: true }
  );

  return { data, error, isValidating };
};

export default useFetch;
