import React from 'react';

const Currenciez = () => {

    return (
        <div className='alert alert-success'>
            Currency 
                <select className="currenciez" id="currenciez" style={{ background: 'lightgreen' }}>
                    <option value="$" name="$">$ Dollar</option>
                    <option defaultValue value="£" name="£">£ Pound</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Ruppee</option>
                </select>
        </div>
    );
};
export default Currenciez;
