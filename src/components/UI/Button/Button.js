import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props)
  return (
    <button style={{background:props.validOrNot?'':'blue'}} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
