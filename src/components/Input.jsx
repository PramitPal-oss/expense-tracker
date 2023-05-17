/** @format */

import classes from './Input.module.css';

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      className={classes.input}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
