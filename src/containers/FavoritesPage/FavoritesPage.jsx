import React, {useState, useEffect} from 'react';
import PeopleList from '@components/PeoplePage/PeopleList';
import { useSelector } from 'react-redux';
import styles from './FavoritesPage.module.css';


const FavoritePage = ()=> {
  const [people, setPeople] = useState([]);
  const storeData = useSelector(state => state.favoriteReducer);
  
  useEffect(()=>{
    const arr = Object.entries(storeData);

    if(arr.length){
      const res = arr.map((item)=>{
        return {
          id: item[0],
          // name: item[1].name,
          // img: item[1].img,
          ...item[1],
        }
      });
      setPeople(res);
    }
    
  }, []);

  return (
    <div>
      <h1 className="header__text">Favorite page</h1>
      {people.length ? <PeopleList people={people} /> : <h1 className={styles.comment}>No data</h1>}
    </div>
  );
}

export default FavoritePage;