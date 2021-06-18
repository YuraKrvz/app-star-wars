import React, {useEffect, useState, Suspense} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@ui/UiLoading';

import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import {API_PERSON} from '@constants/api';
import {withErrorApi} from '@hoc-helpers/withErrorApi';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(()=> import('@components/PersonPage/PersonFilms'));
//
const PersonPage = ({match, setErrorApi})=> {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(()=>{
   (async()=> {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if(res){
        setPersonInfo([
          {title: 'height', data: res.height,},
          {title: 'massa', data: res.mass,},
          {title: 'hair color', data: res.hair_color,},
          {title: 'eye color', data: res.eye_color,},
          {title: 'birth year', data: res.birth_year,},
          {title: 'gender', data: res.gender,},
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films)
        

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
   })()
  }, [])
   
  return (
    <React.Fragment>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto 
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
            personPhoto={personPhoto} 
            personName={personName}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading isShadow={true} />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);