import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = ({expenses}) => {

    if (!expenses.length) {
        return (
            <h2 className='noResultInfo'>No expenses found</h2>
        )
    }

    return (
        <ul className='expensesList'>
            {expenses.map(item => {
                return (
                    <ExpenseItem key={item.id} amount={item.amount} date={item.date} title={item.title}/>
                )
            })}
        </ul>
    )
}

export default ExpensesList;