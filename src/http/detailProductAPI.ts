import { $host } from ".";

export const detailProduct = async (id: string) => {
  const { data } = await $host.get(`goods/item/${id}`);
  return data;
};
