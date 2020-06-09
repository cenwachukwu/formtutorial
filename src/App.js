// the read me
// the giphy club : create a giphy album of your faves
// users fill out a form series
// form series collect infomation that will be used to create a profile for the users
// the infomation will be use to create giphy pages of their faves
// this application will feature:
// 1
// multiple form series with continue and back button
// the back button takes them to the previous page with their infomation still intact, this will not be visible on the first page
// the continue buttton takes them to next page only if there is no error, so this button will be invalid until there are no errors
// 2
// user validation
// this is to ensure the safety of the users infomation
// only the creator can edit/delete this infomation
// 3
// get/post
// the form posts infomation to our backend while our ui gets that infomation and uses it to dynamically get requests/infomation from giphy
// i dont know if i want to save giphy info to the backend yet
// 4
// the home page will be a single page
// 5
// a search field
// eg. search for your faves
// i dont know how this will be done
// 6
// modal and carrousel
// so on the fav page, the giphys will be arranged in grid form and when a square is clicked, a modal pops up
// the modal will be a carrousel of giphys with thumbnails underneath with the active thumbnail styled with something to show that it's active
// carrousel will have a prev and next button and visible close button
// the  thumbnail will have a slider ability where people can slide through and click and activate a thumbnail as the focus
// 7
// displaying other peoples album
// you can see peoples albums by clicking an enter the club button
// this also displays as a modal and carrousel
// 8
// a like profile button
// this adds the profile to the "my fave clubers" section of your profile,
// so it posts the profile data of the person to your profile data under the likes array which will be displayed in the likes section of the interface
// the user can manipulate that array but not the individual profiles
// so you can remove the person from your likes in the edit profile section

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
