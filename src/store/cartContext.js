import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
  currMeals: [],
  checkIfInCart: false,
});

export function CartContextProvider(props) {
  const [currMeals, setCurrMeals] = useState([]);
  const [checkIfInCart, setCheckIfInCart] = useState(false);

  function toggleModal() {
    setCheckIfInCart(!checkIfInCart);
  }
  return (
    <CartContext.Provider
      value={{
        checkIfInCart: checkIfInCart,
        setCheckIfInCart: setCheckIfInCart,
        currMeals: currMeals,
        setCurrMeals: setCurrMeals,
        toggleModal: toggleModal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
