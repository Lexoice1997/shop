import {
  FavoriteAction,
  FavoriteActionTypes,
  FavoriteState,
} from "../../types/favorite";

const initialState: FavoriteState = {
  userInfo: {
    firstName: "",
    lastName: "",
    cart: [""],
    favorites: [""],
    orders: "",
  },
  loading: false,
  error: null,
  deleteProd: 0,
  totalSum: 0,
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

export const favoriteReducer = (
  state = initialState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case FavoriteActionTypes.FETCH_FAVORITE:
      return { ...state, loading: true };
    case FavoriteActionTypes.FETCH_FAVORITE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case FavoriteActionTypes.FETCH_FAVORITE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FavoriteActionTypes.DELETE_PRODUCT:
      return { ...state, deleteProd: state.deleteProd + action.payload };
    case FavoriteActionTypes.SET_TOTAL_SUM:
      return { ...state, totalSum: state.totalSum + action.payload };
    case FavoriteActionTypes.SET_PRODUCT:
      return { ...state, product: [...state.product, action.payload] };
    default:
      return state;
  }
};
