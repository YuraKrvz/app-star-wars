import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import {getApiResource} from '@utils/network';
import {API_SEARCH} from '@constants/api';
import {withErrorApi} from '@hoc-helpers/withErrorApi';
import {getPeopleId, getPeopleImage} from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput';
import { styles } from 'ansi-colors';

//import styles from './SearchPage.module.css';


const SearchPage = ({setErrorApi})=> {
   const [inputSearchValue, setInputSearchValue] = useState('');
   const [people, setPeople] = useState([]);

   const debouncedGetResponse = useCallback(debounce(value => getResponse(value), 300), []);
   const getResponse = async param => {   
      const res = await getApiResource(API_SEARCH + param);

      if(res){
         const peopleList = res.results.map(({name, url})=>{
            const id = getPeopleId(url);
            const img = getPeopleImage(id);
            return {
               id, 
               name, 
               img
            }
         });
         setPeople(peopleList);
         
         
         setErrorApi(false);
      } else {
         setErrorApi(true);
      }

   }

   const handleInputChange = value => {
      setInputSearchValue(value);
      debouncedGetResponse(value);
      
   }
 
  return (
    <div>
         <h1 className="header__text">Search</h1>

         <UiInput 
            placeholder="search"
            value={inputSearchValue}
            handleInputChange={handleInputChange}
            classes={styles.input__search}
         />

         <SearchPageInfo people={people} />
    </div>
  );
}

SearchPage.propTypes = {
   setErrorApi: PropTypes.func,

}

export default withErrorApi(SearchPage);