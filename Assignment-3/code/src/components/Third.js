import React from 'react'
import './Third.css'
export default function Third(props) {
    return (
      <div className='product-list'>
          <input type='checkbox'></input>
        <div>
          <img src={props.custominfo.profilepicture} alt='profile'></img>
        </div>
        <div>
          <div>{props.custominfo.name}</div>
          <div>{props.custominfo.designation}</div>
        </div>
      </div>
    );
}