import React, {useState} from "react";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }

    const filteredExpenses = items?.filter(expense => {
        return (
            expense.date?.getFullYear().toString() === filteredYear
        )
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;
