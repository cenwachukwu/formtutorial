import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

function App() {
  // name
  const [name, setName] = useState('');
  // email
  const [email, setEmail] = useState('');

  // we need error messages to display to the user

  //i know we dont want to run our form validation on first render
  // we want to run it when there are changes to our name and  email state
  // useRef is like a “box” that can hold a mutable value in its .current property.
  // we want to use useRef to set a mutable state or like a toggle inside the useEffect hook
  // so that useEffect doesnt run on the first render

  // we also need a disable state to prevent the user from clicking the submit button if there is an error
  // our form validation will check if name or email is empty.
  // if it is, it will change the state of the error message to what we would want to display
  // if it's not, it will change the state of the disable to false and our user can submit their forms

  return (
    <div className="App">
      <form>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
