import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyStyle = {
    color: "grey",
    background: 'alert alert-success',

}
const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-success'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)} style = {CurrencyStyle}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;