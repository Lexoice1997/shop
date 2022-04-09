import { $authHost, $host } from ".";
import { IOrder } from "../types/cart";

export const setCart = async (itemId: any) => {
  const { data } = await $authHost.post("users/cart", itemId);
  return data;
};

export const deleteCart = async (itemId: string) => {
  const { data } = await $authHost.delete(`users/cart?id=${itemId}`);
  return data;
};

export const getProduct = async (itemId: string) => {
  const { data } = await $host.get(`goods/item/${itemId}`);
  return data;
};

export const postOrder = async (order: IOrder) => {
  const { data } = await $authHost.post("users/order", order);
  return data;
};
