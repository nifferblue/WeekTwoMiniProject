import React from 'react'

function Card02Component({description,name,position,image}) {
  return (
    <div className='card02Component'>
      <p>{description}</p>
      <div className='card02'>
      <img src={image} alt="name" />
      <span>
      <div>{name}</div> 
      <div>{position}</div>
      </span>
    
      </div>
      
    </div>
  )
}

export default Card02Component
