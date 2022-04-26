import useSWR from "swr";
import API from "../lib/axios";

const useUser = (url) => {
  const { data, error, isValidating, mutate } = useSWR(
    url,
    async () => {
      const { data } = await API.get(url);

      return data;
    },
    { suspense: true }
  );

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate,
  };
};

export default useUser;
