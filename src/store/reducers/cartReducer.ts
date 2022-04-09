import { CartAction, CartActionTypes, CartState } from "../../types/cart";

const initialState: CartState = {
  userInfo: {
    firstName: "",
    lastName: "",
    cart: [""],
    favorites: [""]
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
      amount: 1,
    },
  ],
  orders: [
    {
      items: [
        {
          id: "",
          amount: 0,
        },
      ],
      details: {
        name: "",
        address: "",
        phone: "",
        timeToDeliver: "",
        comment: "",
      },
    },
  ],
};

export const cartReducer = (
  state = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.FETCH_CART:
      return { ...state, loading: true };
    case CartActionTypes.FETCH_CART_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case CartActionTypes.FETCH_CART_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CartActionTypes.DELETE_PRODUCT:
      return { ...state, deleteProd: state.deleteProd + action.payload };
    case CartActionTypes.SET_TOTAL_SUM:
      return { ...state, totalSum: state.totalSum + action.payload };
    case CartActionTypes.SET_PRODUCT:
      return { ...state, product: [...state.product, action.payload] };
    case CartActionTypes.SET_ORDER:
      return { ...state, orders : [...state.orders, action.payload] };
    default:
      return state;
  }
};
