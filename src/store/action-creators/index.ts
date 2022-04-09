import * as LoginActionCreator from "./login";
import * as RegistrationActionCreator from "./registration";
import * as CategoriesActionCreator from "./categories";
import * as ProductPageActionCreator from "./productPage";
import * as DetailProductActionCreator from "./detailProduct";
import * as CartActionCreator from "./cart";
import * as FavoriteProductCreator from "./favorite";

export default {
  ...LoginActionCreator,
  ...RegistrationActionCreator,
  ...CategoriesActionCreator,
  ...ProductPageActionCreator,
  ...DetailProductActionCreator,
  ...CartActionCreator,
  ...FavoriteProductCreator,
};
