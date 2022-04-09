import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAction } from "../../../../hooks/loginAction";
import "./popularProduct.css";

const PopularProduct = () => {
  const [products, setProducts] = useState<any>([]);
  const idOfProducts = [
    "appliances",
    "electronics",
    "computers-peripherals",
    "furniture",
    "hobbies",
  ];

  const { setDetailProductId } = useAction();

  function delay() {
    return new Promise<void>((resolve) => setTimeout(resolve, 300));
  }

  async function delayProduct(prodId: string) {
    await delay();
    const response = await axios.get(
      `http://localhost:3004/goods/category/${prodId}`,
      { params: { start: 1, count: 6, sortBy: "rating", reverse: true } }
    );
    setProducts((prevProducts: any) => [...prevProducts, response.data]);
  }

  async function getProducts(array: Array<string>) {
    for (const prodId of array) {
      await delayProduct(prodId);
    }
  }

  useEffect(() => {
    getProducts(idOfProducts);
  }, []);

  console.log(products);

  return (
    <>
      <h2 className="popular-product-h2">Популярные товары</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {products.map((item: any, index: number) => {
          return (
            <SwiperSlide key={`${item} + ${index}`}>
              <div className="popular-product">
                {item.map((prod: any, index: number) => {
                  return (
                    <div
                      className="popular-product-item"
                      key={`${prod} + ${index}`}
                    >
                      <div className="popular-prod-head">
                        <div className="popular-prod-img">
                          <img
                            src={prod.imageUrls[0]}
                            alt={prod.name}
                            className="pop-prod-img"
                          />
                        </div>
                      </div>
                      <div className="popular-prod-main">
                        <NavLink
                          to={prod.id}
                          onClick={() => setDetailProductId(prod.id)}
                        >
                          {prod.name}
                        </NavLink>
                        <p className="popular-prod-rait">*****</p>
                        <p className="popular-prod-price">{prod.price} р</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PopularProduct;
