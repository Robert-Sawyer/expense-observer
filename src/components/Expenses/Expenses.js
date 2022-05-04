import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses({items}) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {items?.map(item => {
                return (
                    <ExpenseItem key={item.id} amount={item?.amount} date={item?.date} title={item?.title}/>
                )
            })}
        </Card>
    );
}

export default Expenses;