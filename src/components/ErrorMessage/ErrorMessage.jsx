import React from 'react';
import UiVideo from '@ui/UiVideo';
import video from './video/han-solo.mp4';

import styles from './ErrorMessage.module.css';


const ErrorMessage = ()=> {


  return (
    <React.Fragment>
      <p className={styles.text}>The dark side of the force has own <br />
      we can`t display data</p>

      <UiVideo src={video} classes={styles.video} playbackRate={1} /> 

    </React.Fragment>
  );
}

export default ErrorMessage;