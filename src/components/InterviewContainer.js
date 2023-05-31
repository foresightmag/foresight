import '../css/InterviewContainer.css';
import React from 'react'


export default function InterviewContainer({Title, ID})
{
    return (
      <div id={ID} className='InterviewContainer'>
        <p>{Title}</p>
      </div>
    );   
}