import MenuItem from "../Menu/MenuItem";
import Card from "../UI/Card";
import CartContext from "../../store/cartContext";
import { useContext, useState } from "react";
import OrderForm from "./OrderForm";
import OrderButtons from "./OrderButtons";
import styles from "./Modal.module.css";
import React from "react";
function Modal(props) {
  const ctx = useContext(CartContext);
  const [thanksMessage, setThanksMessage] = useState(false);
  function showThanks(msg) {
    setThanksMessage(msg);
  }
  let currMeals = ctx.currMeals.map((item) => {
    return (
      <MenuItem
        key={item.id}
        title={item.title}
        price={item.price * item.amount}
        amount={item.amount}
        cartFlag={true}
      />
    );
  });
  const currMealsTotalPrice = ctx.currMeals.reduce((acc, item) => {
    return (acc += item.price * item.amount);
  }, 0);

  return (
    <Card className={styles.modal}>
      {thanksMessage ? (
        <React.Fragment>
          <p className={styles.thanksMsg}>{thanksMessage}</p>{" "}
          <OrderButtons thanksMessage={thanksMessage} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {currMeals}
          {ctx.currMeals.length !== 0 ? (
            <div className={styles.totalAmount}>
              <h3>Total Amount</h3>
              <div>${currMealsTotalPrice.toFixed(2)}</div>
            </div>
          ) : (
            <p className={styles.empty}>
              The cart is empty. Why wouldn't you add something?
            </p>
          )}

          {ctx.currMeals.length !== 0 ? (
            <OrderForm onOrderPass={showThanks} />
          ) : (
            <OrderButtons thanksMessage={thanksMessage} />
          )}
        </React.Fragment>
      )}
    </Card>
  );
}

export default Modal;
