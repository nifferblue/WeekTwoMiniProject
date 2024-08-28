import React from 'react'
import image1 from './assets/illustration-intro.png'

function Component01() {
  return (
    <div className='component01'>
      <img src={image1} alt="Illustration-intro" />
      <h2> All your files in one secure location, <br/>accessible anywhere.</h2>
      <p> Fylo stores all your most important files in one secure location. <br/>Access them wherever 
  you need, share and collaborate with <br/>friends family, and co-workers.
</p>
<button> Get Started</button>
    </div>
  )
}

export default Component01
