import styles from "./CartButton.module.css";
import CartButtonIcon from "./CartButtonIcon";
import CartContext from "../../store/cartContext";
import { useContext} from "react";

function CartButton(props) {
  const ctx = useContext(CartContext);
  const currMealsNumber = ctx.currMeals.reduce((acc, item) => {
    return (acc += item.amount);
  }, 0);

  return (
    <button onClick={ctx.toggleModal} className={styles.button}>
      <div className={styles.icon}>
        <CartButtonIcon />
      </div>
      <p>Your Cart</p>
      <div className={styles.badge}>{currMealsNumber}</div>
    </button>
  );
}

export default CartButton;
