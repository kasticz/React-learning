import MenuItem from "../Menu/MenuItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import CartContext from "../../store/cartContext";
import { useContext } from "react";
import styles from "./Modal.module.css";
function Modal(props) {
  const ctx = useContext(CartContext);
  let currMeals = ctx.currMeals.map((item) => {
    return (
        item.amount ?
      <MenuItem
        key={item.id}
        title={item.title}
        price={item.price * item.amount}
        amount={item.amount}
        cartFlag={true}
      /> :
      ``
    );
  });
  const currMealsTotalPrice = ctx.currMeals.reduce((acc,item)=>{
    return acc+=item.price * item.amount
  },0)

  return (
    <Card className={styles.modal}>
      {currMeals}
      {ctx.currMeals.filter(item=>item.amount > 0).length ? (
        <div className={styles.totalAmount}>
          <h3>Total Amount</h3>
          <div>${currMealsTotalPrice.toFixed(2)}</div>
        </div>
      ) : (
        <p className={styles.empty}>The cart is empty. Why wouldn't you add something?</p>
      )}
      <div className={styles.modalButtons}>
        <button onClick={ctx.toggleModal} className={styles.cancel}>
          Cancel
        </button>
        {ctx.currMeals.filter(item=>item.amount > 0).length ? <Button onClick={()=> console.log(`Order complete!`)}className={styles.order}>Order</Button> : ` `}
        
      </div>
    </Card>
  );
}

export default Modal;
