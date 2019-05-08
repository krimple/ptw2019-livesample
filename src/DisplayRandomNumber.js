import React from 'react';
import * as styles
  from './DisplayRandomNumber.module.css';
const DisplayRandomNumber = (props) =>
  <span className={styles.bigNumber}>
    {props.number.toLocaleString()}
  </span>;

export default DisplayRandomNumber;
