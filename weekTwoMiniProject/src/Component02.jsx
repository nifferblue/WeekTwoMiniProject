import React from 'react'
import image2 from './assets/illustration-stay-productive.png'
import arrow from './assets/icon-arrow.svg'

function Component02() {
  return (
    <div className='component02'>
      <img src={image2} alt="" />
      <div>
      <h2>Stay productive,<br/> wherever you are</h2>
      <p> Never let location be an issue when accessing your files. Fylo has you <br/> covered for all of your file 
      storage needs.<br/><br/>
      Securely share files and folders with friends, family and colleagues for live <br/>collaboration. No email 
      attachments required.<br/><br/>
      <span>
        <a href='#'>See how Flylo works
          <img src={arrow} alt="arrow" />
          </a> 
      </span>

      </p>
      </div>
      
    </div>
  )
}

export default Component02
