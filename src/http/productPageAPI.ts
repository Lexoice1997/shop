import { $host } from ".";

export const productPage = async (
  categoryId: string,
  subCategoryId: string,
  page: number
) => {
  const { data } = await $host.get(
    `goods/category/${categoryId}/${subCategoryId}`,
    {
      params: {
        start: `${(page - 1) * 8 + 1}`,
        count: 8,
      },
    }
  );

  return data;
};

export const allProduct = async (categoryId: string, subCategoryId: string) => {
  const { data } = await $host.get(
    `goods/category/${categoryId}/${subCategoryId}`
  );

  return data;
};

export const sortBy = async (
  categoryId: string,
  subCategoryId: string,
  page: number,
  sort: string,
  rev: boolean
) => {
  const { data } = await $host.get(
    `goods/category/${categoryId}/${subCategoryId}`,
    {
      params: {
        start: `${(page - 1) * 8 + 1}`,
        count: 8,
        sortBy: sort,
        reverse: rev,
      },
    }
  );

  return data;
};
