import useSWR from "swr";
import API from "../lib/axios";

const useUser = (username) => {
  const url = `/wg/users/${username}/following`;
  const { data, error, isValidating, mutate } = useSWR(
    url,
    async () => {
      const { data } = await API.get(url);

      return data;
    },
    { suspense: false }
  );

  return {
    following: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
    mutate,
  };
};

export default useUser;
