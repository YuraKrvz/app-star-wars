import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import icon from './img/bookmark.svg';
import styles from './Favorite.module.css';


const Favorite = ()=> {
   const storeDate = useSelector(state => state.favoriteReducer); 
   const [count, setCount] = useState(0);

   useEffect(()=>{
      const length = Object.keys(storeDate).length;

      length.toString().length > 2 ? setCount('...') : setCount(length);

      setCount(length); 

   });
 
  return (
    <div className={styles.container}>
         <Link to="/favorites" >
            <span className={styles.counter}>{count}</span>
            <img 
               src={icon}
               className={styles.icon}
               alt="favorites" 
            />
         </Link>
      
    </div>
  );
}

export default Favorite;