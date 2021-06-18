import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';


const UiButton = ({
   text, 
   onClick, 
   disabled,
   theme='dark',
   classes,
})=> {
 
  return (
    <div>
      <button 
      onClick={onClick} 
      className={cn(styles.button, styles[theme], classes)}
      disabled={disabled}
      >{text}</button>  
    </div>
  );
}

UiButton.propTypes = {
   text: PropTypes.string,
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
   theme: PropTypes.string,
   classes: PropTypes.string,
}

export default UiButton;