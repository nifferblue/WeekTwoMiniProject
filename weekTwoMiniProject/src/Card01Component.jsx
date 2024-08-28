import React from 'react'

function Card01Component({image,title,description,className}) {
  return (
    <div className={className}>
      <img src={image} alt="{title}" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Card01Component
