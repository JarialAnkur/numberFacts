import React, { useState } from 'react';
import './App.css';
import useText from './Hooks/useText';
import useFetch from './Hooks/useFetch';

const App = () => {
  const [values, setValues] = useText({ number: "" });
  const [numValue, setNumValue] = useState("0");
  const { data, loading } = useFetch(`http://numbersapi.com/${numValue}`);
  const HandleClick = () => {
    setNumValue(values.number);
  }
  return (
    <React.Fragment>

      <div>
        <div class="card">
          <h5 class="card-header">Number Facts</h5>
          <div class="card-body">
            <input
              name="number"
              id="exampleInputEmail1"
              class="form-control card-title"
              placeholder="Number"
              value={values.number}
              onChange={setValues}
            />
            <p class="card-text">{loading ? "Loading..." : data}</p>
            <button class="btn btn-primary" onClick={HandleClick}>Submit</button>
          </div>
        </div>
      </div>

    </React.Fragment>

  );
}

export default App;
