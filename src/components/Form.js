import React, {useState} from "react";
import Buttons from "./Buttons";
import classes from './Input.module.css'

const Input = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [usernameIsValid, setUsernameIsValid] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateInput = () => {
    if (
       setEmailIsValid(enteredEmail.includes('@')) 
    && setPasswordIsValid(enteredPassword.trim().length > 6) 
    && setUsernameIsValid(enteredUsername.trim().length > 6)
    )
    return emailIsValid && passwordIsValid & usernameIsValid;
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword, enteredUsername);
  };

  return (
    <>
    <form 
    className={classes.input}
    onSubmit={submitHandler}
    >
      <label htmlFor="email">Email</label>
      <input 
      type="email"
      id="email"
      value= {enteredEmail}
      onChange={emailChangeHandler}
      onBlur={validateInput}
      />
   
      <label htmlFor="username">Username</label>
      <input 
      type="username" 
      id="username"
      value = {enteredUsername}
      onChange={usernameChangeHandler}
      onBlur={validateInput}
      />
  
      <label htmlFor="password">Password</label>
      <input 
      type="password" 
      id="password"
      value = {enteredPassword}
      onChange={passwordChangeHandler}
      onBlur={validateInput}
      />
      <Buttons />
    </form>
    </>
    
  )

}

export default Input;