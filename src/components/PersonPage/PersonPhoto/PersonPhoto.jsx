import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {setPersonToFavorite, RemovePersonFromFavorite} from '@store/actions';
import iconFavoriteFill from './img/favorite-fill.svg';
import iconFavorite from './img/favorite.svg';

import styles from './PersonPhoto.module.css';


const PersonPhoto = ({
  personPhoto, 
  personName, 
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = ()=>{
    if(personFavorite){
      dispatch(RemovePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto,
        }
      }));
      setPersonFavorite(true)
    }
  };
 
  return (
    <React.Fragment>
      <div className={styles.container}>
      <img src={personPhoto} alt={personName} className={styles.photo}/>
      <div className={styles.container__favorite}>
        <img 
        src={personFavorite ? iconFavoriteFill : iconFavorite}
        onClick={dispatchFavoritePeople}
        className={styles.favorite}
        alt="add to favorite"
        />
      </div>
      </div>
    </React.Fragment>
    
  );
}

PersonPhoto.propTypes = {
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
  personId: PropTypes.string,
  personPhoto: PropTypes.string,
  personName: PropTypes.string,

}

export default PersonPhoto;