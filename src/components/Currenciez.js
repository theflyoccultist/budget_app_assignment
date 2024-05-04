import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currenciez = () => {

    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };


    return (
        <div className='alert alert-success'>
            Currency 
                <select value={currency} onChange={handleCurrencyChange} style={{ background: 'lightgreen' }}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
        </div>
    );
};
export default Currenciez;
