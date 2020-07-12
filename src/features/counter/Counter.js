import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';
/* 
codingan untuk  counter 
*/
export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className=''>
        <span className=''>Counter: {count}</span>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}> -1 </button>
        <button onClick={() => dispatch(increment())}> +1 </button> 
      </div>  

      <div className=''>
        <input
          className=''
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        
        <button
          className=''
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>

        
      </div>   
    </div>
  );
}
