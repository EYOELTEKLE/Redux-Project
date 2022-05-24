import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { CounterActions } from '../store/counter';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show         = useSelector(state => state.counter.showCounter)

  const IncrementHandler = () => 
  {
dispatch(CounterActions.increment());
  }
  const DecrementHandler = () => 
  {
dispatch(CounterActions.decrement())
  }
  const IncreaseHandler = () => 
  {
    dispatch(CounterActions.increase(10))
  }
  const toggleCounterHandler = () => 
  {
    dispatch(CounterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increment by 10</button>
        <button onClick = {DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
