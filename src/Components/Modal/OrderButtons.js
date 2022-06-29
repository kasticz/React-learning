import styles from './OrderButtons.module.css'
import Button from '../UI/Button'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

function OrderButtons(props){
    const ctx = useContext(CartContext)
    return(
        <div className={styles.modalButtons}>
        <button onClick={ctx.toggleModal} className={styles.cancel}>
          Cancel
        </button>
        {ctx.currMeals.length !== 0 && !props.thanksMessage ? (
          <Button disabled={props.buttonDisabled ? true : false}  className={styles.order}>Order</Button>
        ) : (
          ` `
        )}
      </div>
    )


}


export default OrderButtons