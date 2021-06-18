 import React, { useEffect, useRef } from 'react';
 import PropTypes from 'prop-types';
 import cn from 'classnames';

 import styles from './UiVideo.module.css';
 
 
 const UiVideo = ({src, classes, playbackRate=1.0, })=> {
   const videoRef = useRef(null);

   useEffect(()=>{
     videoRef.current.playbackRate = playbackRate;
   }, []);

   return (
     <div>
          <video 
            className={cn(styles.video, classes)} 
            loop
            autoPlay
            muted
            ref={videoRef} 
         >
            <source src={src} />
          </video>
     </div>
   );
 }

 UiVideo.propTypes = {
   src: PropTypes.string,
   classes: PropTypes.string,
   playbackRate: PropTypes.number,
   
 }

 
 export default UiVideo;