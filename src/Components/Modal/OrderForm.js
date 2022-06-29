import useInput from "../../hooks/useInput";
import { useEffect, useState, useContext } from "react";
import styles from "./OrderForm.module.css";
import Input from "../UI/Input";
import OrderButtons from "./OrderButtons";
import CartContext from "../../store/cartContext";

function OrderForm(props) {
  const ctx = useContext(CartContext);
  function NameInputValidation(value) {
    const checkLength = value.trim().length > 1;
    let checkNums = true;
    for (let letter of value.trim()) { 
      if (+letter == letter || [`@!#$^&*()_+|=-~<>?,./'';[]{}:"")`].includes(letter)) {
        checkNums = false;
        break;
      }
    }
    return checkLength && checkNums;
  }
  function streetInputValidation(value) {
    return value.length > 3;
  }
  function postalInputValidation(value) {
    return +value.trim() == value.trim() && value.trim().length > 4;
  }

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const nameValidation = useInput(
    NameInputValidation,
    `Name should be at least 2 character long and should only contain letters`
  );
  const streetValidation = useInput(
    streetInputValidation,
    `Street should be at least 4 character long`
  );
  const postalValidation = useInput(
    postalInputValidation,
    `PostalCode should be at least 5 character long and should only contain numbers`
  );
  const cityValidation = useInput(
    NameInputValidation,
    `City should be at least 2 character long and should only contain letters`
  );

  useEffect(() => {
    if (
      nameValidation.isValid &&
      streetValidation.isValid &&
      postalValidation.isValid &&
      cityValidation.isValid
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameValidation, streetValidation, postalValidation, cityValidation]);

  async function  onSubmit(e) {
    e.preventDefault();
    nameValidation.reset()
    streetValidation.reset()
    postalValidation.reset()
    cityValidation.reset()
    props.onOrderPass(`Successfully sent the order!`)
    await fetch(`https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/newMeals.json`,{
      method: `POST`,
      body: JSON.stringify(ctx.currMeals),
      headers: {
       'Content-type':'application/json'
      }
    })    
    ctx.setCurrMeals([])

  }

  return (
    <form onSubmit={onSubmit} className={styles.orderForm}>
      <div>
        <Input
          className={styles.input}
          label="Your Name"
          input={{
            id: "OrderFormName",
            type: "text",
            styles: styles.input,
            onBlur: nameValidation.onBlur,
            onChange: nameValidation.onChange,
            value: nameValidation.inputValue,
            className: nameValidation.isError
              ? `${styles.input} ${styles.invalid}`
              : styles.input,
          }}
        />
        {nameValidation.errorMSG ? (
          <p className={styles.errorMSG}>{nameValidation.errorMSG}</p>
        ) : (
          ``
        )}
      </div>
      <div>
        <Input
          className={styles.input}
          label="Street"
          input={{
            id: "OrderFormStreet",
            type: "text",
            styles: styles.input,
            onBlur: streetValidation.onBlur,
            onChange: streetValidation.onChange,
            value: streetValidation.inputValue,
            className: streetValidation.isError
              ? `${styles.input} ${styles.invalid}`
              : styles.input,
          }}
        />
        {streetValidation.errorMSG ? (
          <p className={styles.errorMSG}>{streetValidation.errorMSG}</p>
        ) : (
          ``
        )}
      </div>
      <div>
        <Input
          className={styles.input}
          label="Postal Code"
          input={{
            id: "OrderFormPostal",
            type: "text",
            styles: styles.input,
            onBlur: postalValidation.onBlur,
            onChange: postalValidation.onChange,
            value: postalValidation.inputValue,
            className: postalValidation.isError
              ? `${styles.input} ${styles.invalid}`
              : styles.input,
          }}
        />
        {postalValidation.errorMSG ? (
          <p className={styles.errorMSG}>{postalValidation.errorMSG}</p>
        ) : (
          ``
        )}
      </div>
      <div>
        <Input
          className={styles.input}
          label="City"
          input={{
            id: "OrderFormCity",
            type: "text",
            styles: styles.input,
            onBlur: cityValidation.onBlur,
            onChange: cityValidation.onChange,
            value: cityValidation.inputValue,
            className: cityValidation.isError
              ? `${styles.input} ${styles.invalid}`
              : styles.input,
          }}
        />
        {cityValidation.errorMSG ? (
          <p className={styles.errorMSG}>{cityValidation.errorMSG}</p>
        ) : (
          ``
        )}
      </div>
      <OrderButtons buttonDisabled={buttonDisabled} />
    </form>
  );
}

export default OrderForm;
