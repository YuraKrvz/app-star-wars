import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import Favorite from '@components/Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import imgDroid from './img/dark.png';
import imgLightsaber from './img/light.png';
import imgSpaceStation from './img/naitral.png';

import styles from './Header.module.css';


const Header = ()=> {
   const [icon, setIcon] = useState(imgSpaceStation);
   const isTheme = useTheme();

   useEffect( ()=>{
      switch (isTheme.theme) {
         case THEME_LIGHT: setIcon(imgLightsaber); break;
         case THEME_DARK: setIcon(imgDroid); break;
         case THEME_NEITRAL: setIcon(imgSpaceStation); break;
      
         default:
            break;
      }
   }, [isTheme] );
 
  return (
    <div className={styles.container}>
      <img src={icon} className={styles.logo} alt="star w logo" />

      <ul className={styles.list__container}>
         <li>
            <NavLink to="/" exact>Home</NavLink>
         </li>
         <li>
            <NavLink to="/people/?page=1">People</NavLink>
         </li>
         <li>
            <NavLink to="/not-found" exact>Not found</NavLink>
         </li>
         <li>
            <NavLink to="/fail" exact>Fail</NavLink>
         </li>
         <li>
            <NavLink to="/search" exact>Search</NavLink>
         </li>
      </ul>
      <Favorite />
    </div>
  );
}

export default Header;