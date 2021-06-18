import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({people})=>(
    <div>
      {people.length 
         ? (
            <ul className={styles.list__container}>
               {people.map(({id, name, img})=>{
                  return(<li key={id} className={styles.list__item}> 
                     <Link to={`/people/${id}`}>
                        <img src={img} alt={name}  className={styles.person__photo}/> 
                        <p  className={styles.person__name}>{name}</p>                   
                     </Link>
                  </li>)
               })}
            </ul>
         )
         : <h2 className={styles.person__comment}>No results</h2>}
    </div>
);

SearchPageInfo.propTypes = {
   people: PropTypes.array,
   
}

export default SearchPageInfo;