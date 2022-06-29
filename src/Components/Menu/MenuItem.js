import styles from "./MenuItem.module.css";
import MenuForm from "./MenuForm";
import { useContext, useState } from "react";
import CartContext from "../../store/cartContext";
import React from "react";

function MenuItem(props) {
  const ctx = useContext(CartContext);
  const [currAmount, setCurrAmount] = useState(props.amount || 0);

  function increaseAmount() {
    ctx.setCurrMeals((prevState) => {
      let currMealInd = prevState.findIndex(
        (item) => item.title === props.title
      );
      prevState[currMealInd].amount++;
      return [...prevState];
    });
    setCurrAmount(currAmount + 1);
  }
  function decreaseAmount() {

    ctx.setCurrMeals((prevState) => {
      let currMealInd = prevState.findIndex(
        (item) => item.title === props.title
      );
      if(props.amount === 1){
         prevState.splice(currMealInd,1)          
      }else{
        prevState[currMealInd].amount--;
      }      
      return [...prevState];
    });
    setCurrAmount(currAmount - 1);
  }

  return (
    <div className={`${styles.item} ${props.cartFlag ? styles.itemAlt : ``}`}>
      <div className={styles.itemMain}>
        <h3 className={styles.itemTitle}>{props.title}</h3>
        <div className={styles.itemDescr}>{props.descr}</div>
        <div className={styles.amountWrapper}>
          <div className={styles.itemPrice}>${props.price.toFixed(2)}</div>
          {props.cartFlag ? (
            <div className={styles.amount}>x{currAmount}</div>
          ) : (
            ``
          )}
        </div>
      </div>
      {props.cartFlag ? (
        <div className={styles.buttonsWrapper}>
          <button onClick={decreaseAmount} className={styles.minus}>
            -
          </button>
          <button onClick={increaseAmount} className={styles.plus}>
            +
          </button>
        </div>
      ) : (
        <MenuForm title={props.title} price={props.price} />
      )}
    </div>
  );
}

export default MenuItem;
