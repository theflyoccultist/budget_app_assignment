import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger': 'alert-success';
    const remainingBudget = budget - totalExpenses;

//    const valueRemaining = remainingBudget.valueOf();

//     if (valueRemaining < 0) {
//         alert('you cannot reduce the budget value more than the spending')
//     }



    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remainingBudget}</span>
        </div>
    );
};
export default Remaining;