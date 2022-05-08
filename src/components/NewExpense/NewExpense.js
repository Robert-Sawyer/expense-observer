import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
    const [formVisible, setFormVisible] = useState(false)

    const showFormHandler = () => {
        setFormVisible((prevState => !prevState))
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData);
        setFormVisible((prevState => !prevState))
    };

    return (
        <div className='new-expense'>
            {formVisible ? (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showFormHandler}/>
            ) : (
                <div className='new-expense__cancel'>
                    <button onClick={showFormHandler}>Add New Expense</button>
                </div>
            )}
        </div>
    );
};

export default NewExpense;