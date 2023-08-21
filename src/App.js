import './App.css';
import { useState,useRef } from 'react';

function App() {
  const initialRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const add = (e) => {
        e.preventDefault();
        setResult((result) => result + Number(initialRef.current.value));
  }

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(initialRef.current.value));
  }

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(initialRef.current.value));
  }

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(initialRef.current.value));
  }

  const InputReset = (e) => {
    e.preventDefault();
    initialRef.current.value = 0;
  }

  const ResultReset = (e) => {
    e.preventDefault();
    setResult(0);
  }
  return (
    <div className="App">
      <head>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
      </head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
      <h1>Calculator</h1>
      
      <form>
        <input ref={initialRef} type="number"/>
        <div className='buttons'>
            <button 
            onClick={add}
            type = "button" className='btn btn-secondary'> Add </button>
            <button 
            onClick={minus}
            type = "button" className='btn btn-secondary'> Subtract </button>
            <button 
            onClick={multiply}
            type = "button" className='btn btn-secondary'> Multiply </button>
            <button
            onClick={divide}
             type = "button" className='btn btn-secondary'> Divide </button>
            <button
            onClick={InputReset}
            type = "button" className='btn btn-success'> InputReset </button>
            <button
            onClick={ResultReset}
             type = "button" className='btn btn-success'> ResultReset </button>
        </div>
      </form>
      <p ref = {resultRef} style={{fontSize: "40px"}}>
      {result}
      </p>
    </div>
  );
}

export default App;
