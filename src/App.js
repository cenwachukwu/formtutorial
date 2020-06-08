import React, { useEffect, useState, useRef } from 'react';
import './App.scss';

function App() {
  // name
  const [name, setName] = useState('');
  // email
  const [email, setEmail] = useState('');

  // we need error messages to display to the user
  // we would set this to null and that would make it false and not appear until it's not null
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  // we also need a disable state to prevent the user from clicking the submit button if there is an error
  const [disabled, setDisabled] = useState(true);
  // our form validation will check if name or email is empty.
  // if it is, it will change the state of the error message to what we would want to display
  // if it's not, it will change the state of the disable to false and our user can submit their forms

  // validEmailRegex
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const handleformValidation = () => {
    if (name === '' && email === '') {
      return true;
    } else {
      return false;
    }
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setNameError(value.length ? null : 'Name can not be blank!');
        break;
      case 'email':
        setEmailError(validEmailRegex.test(value) ? null : 'Email is not valid!');
        break;

      default:
        break;
    }
  };

  //i know we dont want to run our form validation on first render
  // we want to run it when there are changes to our name and  email state
  // useRef is like a “box” that can hold a mutable value in its .current property.
  // we want to use useRef to set a mutable state or like a toggle inside the useEffect hook
  // so that useEffect doesnt run on the first render
  const isFirstRender = useRef(true);
  useEffect(() => {}, [name, email]);

  return (
    <div className="App">
      <form>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" onChange={handleFormChange} />
            {nameError ? <span className="error">{nameError}</span> : null}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleFormChange} />
            {emailError ? <span className="error">{emailError}</span> : null}
          </li>
          {nameError && <p>{nameError}</p>}
          <li>
            <button type="submit" disabled={disabled}>
              Save
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
