import './NewExpense.css'
import ExpensForm from './ExpenseForm'
function NewExpense(props) {
    function onSaveExpenseData(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpensForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
}

export default NewExpense;
