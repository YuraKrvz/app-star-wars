import React from 'react';
import Header from '@components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import styles from './App.module.css';

function App() {
 
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header />

          <Switch>
            {routesConfig.map( (route, index, )=> (
              <Route
                key={index} 
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ) )}
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;