import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import icon from './img/cancel.svg';

import '../index.css'; 
import styles from './UiInput.module.css';


const UiInput = ({type, value, handleInputChange, placeholder, classes})=> (
   <div className={cn(styles.wrapper__input, classes)}>
      <input 
         type="text"
         value={value}
         onChange={(e)=> handleInputChange(e.target.value)}
         placeholder={placeholder}
         className={styles.input}
      />
      <img onClick={()=> value && handleInputChange('') } src={icon} className={cn(styles.clear, !value && styles.clear__disabled)} alt="clear" />
   </div>
);

UiInput.propTypes = {
   type: PropTypes.string,
   value: PropTypes.string,
   handleInputChange: PropTypes.func,
   placeholder: PropTypes.string,
   className: PropTypes.string,
}

export default UiInput;