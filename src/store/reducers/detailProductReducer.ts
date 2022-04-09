import {
  DetailProductAction,
  DetailProductActionTypes,
  DetailProductState,
} from "../../types/detailProduct";

const initialState: DetailProductState = {
  id: "",
  product: {
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
  loading: false,
  error: null,
};

export const detailProductReducer = (
  state = initialState,
  action: DetailProductAction
): DetailProductState => {
  switch (action.type) {
    case DetailProductActionTypes.FETCH_DETAIL_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case DetailProductActionTypes.FETCH_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case DetailProductActionTypes.FETCH_DETAIL_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case DetailProductActionTypes.SET_ID:
        return {
          ...state,
          id: action.payload
        }
    default:
      return state;
  }
};
