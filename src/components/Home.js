import React from 'react';

import classes from './Buttons.module.css';

const HomePage = (props) => {
  return (
    <>
      <header>
        <h2>Welcome Beautiful!</h2>
        <button type="submit" onClick={props.onLogout} className={classes.button}>Logout</button>
      </header>
      <div>You're Signed In</div>
    </>
  );
};

export default HomePage;