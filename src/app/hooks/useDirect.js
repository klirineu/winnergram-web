import useSWR from "swr";
import API from "../lib/axios";

const useChatBox = (url) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      const { data } = await API.get(url);

      return data;
    },
    { suspense: false }
  );

  return { data, error, isValidating };
};

export default useChatBox;
