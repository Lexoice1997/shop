import {
  CategoriesAction,
  CategoriesActionTypes,
  CategoriesState,
} from "../../types/categories";

const initialState: CategoriesState = {
  categories: [{ id: "", name: "", subCategories: [{ id: "", name: "" }] }],
  loading: false,
  error: null,
  category: { id: "", name: "", subCategories: [{ id: "", name: "" }] },
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES:
      return {
        loading: true,
        error: null,
        categories: [
          { id: "", name: "", subCategories: [{ id: "", name: "" }] },
        ],
        category: { id: "", name: "", subCategories: [{ id: "", name: "" }] },
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        categories: action.payload,
        category: { id: "", name: "", subCategories: [{ id: "", name: "" }] },
      };
    case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        categories: [
          { id: "", name: "", subCategories: [{ id: "", name: "" }] },
        ],
        category: { id: "", name: "", subCategories: [{ id: "", name: "" }] },
      };
    case CategoriesActionTypes.SET_SUB_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
