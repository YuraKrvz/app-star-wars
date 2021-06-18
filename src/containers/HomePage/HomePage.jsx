import React from 'react';
import ChooseSide from '@components/HomePage/ChooseSide';
//import styles from './HomePage.module.css';


const HomePage = ()=> {
 
  return (
    <React.Fragment>
      <h1 className="header__text">Home page</h1>
      <ChooseSide />
    </React.Fragment>
  );
}

export default HomePage;