import './App.css';
import { useState } from 'react'
import Counters from './classComponents';
function App() {
  let [count, setCount] = useState(0);
  //Create a functional component named Greeting that displays a simple greeting message
  function Greetings() {
    return (
      <div >
        <h1>Hi, Good Mornin!</h1>
      </div>
    );
  }
  //Convert the Counter class component into a functional component.
  function countClick() {
    count++
    setCount(count)
  }
  function Counter() {
    return (
      <>
      <h5>Using functional Component</h5>
        <button onClick={countClick}> Counter {count}</button>
        <Counters/>
      </>
    )
  }
  return (
    <div className="App">
      <Greetings />
      <Counter />
    </div>
  );
}

export default App;
