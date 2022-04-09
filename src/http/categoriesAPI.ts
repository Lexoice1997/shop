import { $host } from ".";

export const categories = async () => {
  const { data } = await $host.get("categories");
  return data;
};