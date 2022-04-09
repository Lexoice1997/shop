import { Star, StarBorder } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
//@ts-ignore
import styles from "./favorite.module.scss";
import FavoriteProduct from "./favoriteProduct";

const Favorite = () => {
  const { userInfo, loading, error, deleteProd } = useTypedSelector(
    (state) => state.favoirte
  );

  const { fetchFavorite } = useAction();

  useEffect(() => {
    fetchFavorite();
  }, [deleteProd]);

  if (loading) {
    return <div>Идет загрузка</div>;
  }

  if (error || userInfo.favorites.length === 0) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {userInfo.favorites.map((itemId: string) => {
        return <FavoriteProduct itemId={itemId} />;
      })}
    </div>
  );
};

export default Favorite;
