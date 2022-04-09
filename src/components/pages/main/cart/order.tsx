import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IOrderDetails, IOrderItem } from "../../../../types/cart";
//@ts-ignore
import styles from "./cart.module.scss";

const Order = () => {
  const { userInfo } = useTypedSelector((state) => state.cart);
  const [orderArray, setOrderArray] = useState<IOrderItem[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const { setOrder } = useAction();

  const handlePostOrder = () => {
    userInfo.cart.forEach((item) => {
      setOrderArray((prevOrders: any) => [
        ...prevOrders,
        { id: item, amount: 1 },
      ]);
    });
  };

  const fetchOrder = (obj: IOrderDetails) => {
    setOrder({ items: orderArray, details: obj });
  };

  useEffect(() => {
    handlePostOrder();
  }, []);

  console.log(orderArray);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Должен быть больше 3 букв")
      .max(50, "Должен быть меньше 50 букв")
      .required("Обязательно"),
    address: yup
      .string()
      .min(3, "Должен быть больше 3 букв")
      .max(250, "Должен быть меньше 50 букв")
      .required("Обязательно"),
    phone: yup
      .number()
      .min(10, "Должен быть не менее 10 числ")
      .required("Должен быть только цифры"),
    timetoDeliver: yup.date().required("Объязательно"),
    comment: yup
      .string()
      .min(3, "Должен быть больше 3 букв")
      .max(250, "Должен быть меньше 50 букв"),
  });

  return (
    <div className={styles.order}>
      <h2>Доставка</h2>
      <Formik
        initialValues={{
          name: "",
          address: "",
          phone: "",
          timeToDeliver: "",
          comment: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values: IOrderDetails, { resetForm }) => {
          fetchOrder(values);
          resetForm({
            values: {
              name: "",
              address: "",
              phone: "",
              timeToDeliver: "",
              comment: "",
            },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className={styles.inputComponent}>
              <div className={styles.label}>
                <label htmlFor="name">Имя Фамилия:</label>
              </div>

              <div className={styles.input}>
                <input
                  type="text"
                  name="name"
                  placeholder="Андрей"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>

              {touched.name && errors.name && (
                <p className={styles.errors}>{errors.name}</p>
              )}

              <div className={styles.label}>
                <label htmlFor="address">Адресс доставки:</label>
              </div>

              <div className={styles.input}>
                <input
                  type="text"
                  name="address"
                  placeholder="Ташкент"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </div>

              {touched.address && errors.address && (
                <p className={styles.errors}>{errors.address}</p>
              )}

              <div className={styles.label}>
                <label htmlFor="phone">Телефон:</label>
              </div>

              <div className={styles.input}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="998999585467"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>

              {touched.phone && errors.phone && (
                <p className={styles.errors}>{errors.phone}</p>
              )}

              <div className={styles.label}>
                <label htmlFor="timetoDeliver">Время доставки:</label>
              </div>

              <div className={styles.input}>
                <input
                  type="date"
                  name="timetoDeliver"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              {touched.timeToDeliver && errors.timeToDeliver && (
                <p className={styles.errors}>{errors.timeToDeliver}</p>
              )}

              <div className={styles.label}>
                <label htmlFor="comment">Комментарии:</label>
              </div>

              <div className={styles.input}>
                <textarea
                  name="comment"
                  placeholder="комментарии"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
              </div>

              {touched.comment && errors.comment && (
                <p className={styles.errors}>{errors.comment}</p>
              )}
            </div>

            <button className={styles.orderBtn}>Потвердить заказ</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Order;
