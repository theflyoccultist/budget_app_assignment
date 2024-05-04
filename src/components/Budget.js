import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// const budgetReducer = (state, action) => {
//     switch (action.type) {
//         case 'SET_BUDGET':
//             return action.payload;
//         default:
//             return state;
//     }
// };

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    
    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value, 10);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={budget} 
                onChange={handleBudgetChange} 
                max={20000}
            />
        </div>
    );
};

export default Budget;

