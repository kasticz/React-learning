import styles from "./MenuForm.module.css";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import CartContext from "../../store/cartContext";
function MenuForm(props) {
  const ctx = useContext(CartContext);
  const [enteredAmount, setEnteredAmount] = useState(1);

  function changeAmount(e) {
    setEnteredAmount(e.target.value);
  }

  function addNewMeal(e) {
    e.preventDefault();
    ctx.setCartButtonBump(true);
    setTimeout(() => {
      ctx.setCartButtonBump(false);
    }, 300);
    ctx.setCurrMeals((prevState) => {
      let newMeals = [
        ...prevState,
        {
          id: Math.random(),
          title: props.title,
          price: props.price,
          amount: +enteredAmount || 1,
        },
      ];
      return filterMeals(newMeals);
    });
    function filterMeals(meals) {
      for (let i = 0; i < meals.length; i++) {
        meals.forEach((item, index) => {
          if (item.title === meals[i].title && index !== i) {
            meals[i].amount += item.amount;
            meals.splice(index, 1);
            i = 0;
          }
        });
      }
      return meals;
    }
    setEnteredAmount(1);
  }
  return (
    <form onSubmit={addNewMeal} className={styles.addMore}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          onFocus={(e) => setEnteredAmount(``)}
          onChange={changeAmount}
          value={enteredAmount}
          id="amount"
          type="number"
          min="1"
        />
      </div>
      <Button className={styles.formButton}>+ Add</Button>
    </form>
  );
}

export default MenuForm;
