import { $authHost, $host } from ".";
import { IProduct } from "./../types/productPage";

export const setFavorite = async (itemId: any) => {
  const { data } = await $authHost.post("users/favorites", itemId);
  return data;
};

export const deleteFavoirite = async (itemId: string) => {
  const { data } = await $authHost.delete(`users/favorites?id=${itemId}`);
  return data;
};

export const getFavoriteProduct = async (itemId: string): Promise<IProduct> => {
  const { data } = await $host.get(`goods/item/${itemId}`);
  return data;
};
