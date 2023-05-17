/** @format */

import React from 'react';
import classes from './Filter.module.css';

function Filter(props) {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className={classes.select}
    >
      <option value='all'>All</option>
      <option value='01'>Jan</option>
      <option value='02'>Feb</option>
      <option value='03'>Mar</option>
      <option value='04'>April</option>
      <option value='05'>May</option>
      <option value='06'>June</option>
      <option value='07'>July</option>
      <option value='08'>Aug</option>
      <option value='09'>Sep</option>
      <option value='10'>Oct</option>
      <option value='11'>Nov</option>
      <option value='12'>Dec</option>
    </select>
  );
}

export default Filter;
