import {
  ProductPageAction,
  ProductPageActionTypes,
  ProductPageState,
} from "../../types/productPage";

const initialState: ProductPageState = {
  id: { categoryId: "", subCategoryId: "" },
  product: [
    {
      availableAmount: 0,
      description: "",
      id: "",
      imageUrls: [""],
      isFavorite: false,
      isInCart: false,
      name: "",
      price: 0,
      rating: 0,
    },
  ],
  loading: false,
  error: null,
  page: 1,
  allProduct: [
    {
      availableAmount: 0,
      description: "",
      id: "",
      imageUrls: [""],
      isFavorite: false,
      isInCart: false,
      name: "",
      price: 0,
      rating: 0,
    },
  ],
};

export const productPageReducer = (
  state = initialState,
  action: ProductPageAction
): ProductPageState => {
  switch (action.type) {
    case ProductPageActionTypes.FETCH_PRODUCT_PAGE:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ProductPageActionTypes.FETCH_PRODUCT_PAGE_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case ProductPageActionTypes.FETCH_PRODUCT_PAGE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        product: [
          {
            availableAmount: 0,
            description: "",
            id: "",
            imageUrls: [""],
            isFavorite: false,
            isInCart: false,
            name: "",
            price: 0,
            rating: 0,
          },
        ],
      };
    case ProductPageActionTypes.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case ProductPageActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case ProductPageActionTypes.FETCH_ALL_PRODUCT:
      return {
        ...state,
        allProduct: action.payload,
      };
    case ProductPageActionTypes.FETCH_SORT_BY:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
