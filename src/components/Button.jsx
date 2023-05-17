/** @format */

function Button(props) {
  return (
    <button type='submit' className={props.className}>
      {props.children}
    </button>
  );
}

export default Button;
