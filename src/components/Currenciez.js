import React from 'react';

const Currenciez = () => {

    return (
        <div className='alert alert-danger'>
            <span>Currency: 
                    <select className="currenciez" id="currenciez">
                <option value="£" name="£">£ Pound</option>
                <option value="$" name="$">$ Dollar</option>
                <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Rupee</option>
                  </select>
            </span>
        </div>
    );
};
export default Currenciez;
