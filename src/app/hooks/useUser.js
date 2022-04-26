import useSWR from "swr";
import API from "../lib/axios";

const useUser = (username) => {
  const url = `/wg/users/${username}`;
  const { data, error, isValidating, mutate } = useSWR(
    url,
    async () => {
      const { data } = await API.get(url);

      return data;
    },
    { suspense: true }
  );

  return {
    user: data,
    isLoading: !error && !data,
    error,
    isValidating,
    mutate,
  };
};

export default useUser;
