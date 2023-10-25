
import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const {currency} = useContext(AppContext);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleBudgetSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return (
<div className='alert alert-secondary'>
<form onSubmit={handleBudgetSubmit}>
      <label>Budget: {currency}{budget}
      <br />
        <input 
          type="number" 
          step = "10"
          value={newBudget}
          onChange={handleBudgetChange}
        />
      </label>
      <input type="submit" />
    </form>
</div>
    );
};
export default Budget;