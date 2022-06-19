import { useState } from "react";
import ExpenseFormControls from "./ExpenseFormControls";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [currFormData, setCurrFormData] = useState({});

  function toggleForm() {
    setCurrFormVisibility(!currFormVisibility);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    if (currFormVisibility) {
      props.onSaveExpenseData(currFormData);
    }
    toggleForm();
  }

  function onGetFormData(currFormData) {
    setCurrFormData(currFormData);
  }

  let cancelButton = (
    <button onClick={toggleForm} type="button">
      Cancel
    </button>
  );

  const [currFormVisibility, setCurrFormVisibility] = useState(false);

  function onFormChangeVisibility() {
    return currFormVisibility;
  }

  return (
    <form onSubmit={onFormSubmit}>
      <ExpenseFormControls
        onFormChangeVisibility={onFormChangeVisibility}
        onGetFormData={onGetFormData}
      />
      <div className="new-expense__actions">
        {currFormVisibility ? cancelButton : <div></div>}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
