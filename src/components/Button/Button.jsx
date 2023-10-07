import React from 'react';
import './Button.css';
 
const Button = (props) => {
    return ( 
        <button className='button-wrapper' onClick={() => console.log('Button Clicked')}>{props.label}</button>
     );
}
 
export default Button;