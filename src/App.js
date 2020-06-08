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
  // we need to validate the emails
  const checkEmailPattern = (mail) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(mail);
  };

  const handleformValidation = () => {
    if (nameError !== 'valid' || emailError !== 'valid') {
      return true;
    } else if (nameError === 'valid' && emailError === 'valid') {
      console.log('it worked');
      return false;
    }
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        setNameError(value.length ? 'valid' : 'Name can not be blank!');
        break;
      case 'email':
        setEmailError(checkEmailPattern(value) ? 'valid' : 'Email is not valid!');
        setEmail(value);
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
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setDisabled(handleformValidation());
  }, [name, email]);

  // how about instead of disabling the button, how about we show an error message if the error messages are not valid
  // so if the user clicks the submit button with an invalid form, they will have and alert with all the error messages in red

  return (
    <div className="App">
      <form>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" onChange={handleFormChange} />
            {/* {nameError && <p>{nameError}</p>} */}
            {nameError === 'valid' ? null : <p>{nameError}</p>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleFormChange} />
            {/* {emailError && <p>{emailError}</p>} */}
            {emailError === 'valid' ? null : <p>{emailError}</p>}
          </li>

          <li>
            <button
              type="submit"
              disabled={disabled}
              onClick={(e) => {
                alert('wtf');
              }}
            >
              Save
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
