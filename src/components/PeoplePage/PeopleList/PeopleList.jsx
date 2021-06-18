import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'; 
import styles from './PeopleList.module.css';


const PeopleList = ({people})=> {
   
  return (
      <React.Fragment>
         <ul className={styles.list__container}>
            { people.map(({id, name, img})=>{
               return <li className={styles.list__item} key={id}>
                  <Link to={`/people/${id}`} href="#">
                     <img className={styles.person__photo} src={img} alt={name}/>
                     <h4>{name}</h4>   
                  </Link>
               </li>
            }) }
         </ul>  
      </React.Fragment>

  );
}

PeopleList.propTypes = {
   people: PropTypes.array,
   
};

export default PeopleList;