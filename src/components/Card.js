import React from 'react';
export default function(props)
{
    return (
        <div className='Card' href='/'>
          <a href= "/" className='CardInside'>{props.name}</a>
        </div>
       );
}