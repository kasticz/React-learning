import './ExpenseForm.css'
import { useState } from "react";
function ExpenseFormControls(props) {

    const [enteredTitle, setEnteredTitle] = useState(``);
    const [enteredPrice, setEnteredPrice] = useState(``);
    const [enteredDate, setEnteredDate] = useState(``);
    function onTitleChange(e) {
      setEnteredTitle(e.target.value);
      expenseData = {
        ...expenseData,
        title: e.target.value
      }
      props.onGetFormData(expenseData)   
    }
    function onPriceChange(e) {
      setEnteredPrice(e.target.value);
      expenseData = {
        ...expenseData,
        amount: +e.target.value
      }
      props.onGetFormData(expenseData)            
    }
    function onDateChange(e) {
      setEnteredDate(e.target.value);
      expenseData = {
        ...expenseData,
        date: new Date(e.target.value)
      }  
      props.onGetFormData(expenseData)       
    }
    let expenseData = {
        title: enteredTitle,
        amount: +enteredPrice,
        date: new Date(enteredDate),
    };
    
    if(!props.onFormChangeVisibility()){
        return <div></div>
    }
    


  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={onTitleChange} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredPrice}
          onChange={onPriceChange}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={onDateChange}
        />
      </div>
    </div>
  );
}

export default ExpenseFormControls