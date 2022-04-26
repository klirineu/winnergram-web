import useSWR from "swr";
import API from "../lib/axios";

const useDirectList = (url) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      const { data } = await API.get(url);

      for (let usr of data) {
        const m = await API.get("/wg/users/" + usr.member);
        const a = await API.get("/wg/users/" + usr.author);
        const find = data.findIndex((c) => c.id === usr.id);

        data[find].a_name = a.data.Personal.fname + " " + a.data.Personal.lname;
        data[find].m_name = m.data.Personal.fname + " " + m.data.Personal.lname;
      }

      return data;
    },
    { suspense: true }
  );

  return { data, error, isValidating };
};

export default useDirectList;
