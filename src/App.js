import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'INCREMENT'});
  const decrement = () => dispatch( {type: 'DECREMENT'});

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default App;
