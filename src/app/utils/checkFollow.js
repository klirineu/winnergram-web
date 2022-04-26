import useFetch from "../app/hooks/useFetch";

export default function useCheckFollow(user, member, token) {
  const { data, error } = useFetch(
    `/v1/user/${user}/check/${member}/follow`,
    token
  );

  if (error) return "Error";
  if (!data) return null;

  return data;
}
