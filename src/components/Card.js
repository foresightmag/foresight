import '../css/Card.css';
import React from 'react';


export default function Card(props)
{
    return (
        <div className='Card' href='/'>
          <a href= "/" className='CardInside'>{props.name}</a>
        </div>
       );
}