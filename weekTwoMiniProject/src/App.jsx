
import './App.css'
import Card01Component from './Card01Component'
import Card02Component from './Card02Component'
import Card03Component from './Card03Component'
import Component01 from './Component01'
import Component02 from './Component02'
import Header from './Header'

import icon1 from './assets/icon-access-anywhere.svg'
import icon2 from './assets/icon-any-file.svg'
import icon3 from './assets/icon-security.svg'
import icon4 from './assets/icon-collaboration.svg'

import profile1 from './assets/profile-1.jpg'
import profile2 from './assets/profile-2.jpg'
import profile3 from './assets/profile-3.jpg'
import FooterComponent from './FooterComponent'




function App() {
  

  return (
    <>
    
     <Header/>
     <Component01/>
    
     <div className="card01Component">
     <Card01Component 
     className="grid-card01"
     image={icon1}
     title="Access your files, anywhere"
     description= {<p>The ability to use a smartphone, tablet, or computer <br/>to access your account means your files follow you <br/>everywhere.</p>}
     />
     <Card01Component 
     className="grid-card01"
     image={icon3}
     title=" Security you can trust"
     description= {<p>2-factor authentication and user-controlled encryption are <br/>just a couple of the security 
      features we allow to help<br/> secure your files.
    </p>}
     />
     <Card01Component 
     className="grid-card01"
     image={icon4}
     title="Real-time collaboration"
     description= {<p>Securely share files and folders with friends, family and <br/>colleagues for live collaboration. 
      No email attachments<br/> required.
    </p>}
     />
     <Card01Component 
     className="grid-card01"
     image={icon2}
     title=" Store any type of file"
     description= {<p>Whether you're sharing holidays photos or work <br/>documents, Fylo has you covered allowing for all 
     file <br/>types to be securely stored and shared.</p>}
     />
     </div>
     <Component02/>
      <div className='card2Wrapper'>
      <Card02Component
     description={<p>Fylo has improved our team productivity by <br/>an order of magnitude. Since making the <br/>switch our team has 
  become a well-oiled <br/>collaboration machine.</p>}
     image={profile1}
     name={' Satish Patel'}
     position={'Founder & CEO, Huddle'}
     />
     <Card02Component
     description={<p> Fylo has improved our team productivity by <br/>an order of magnitude. Since making the<br/> switch our team has 
  become a well-oiled <br/>collaboration machine.</p>}
     image={profile2}
     name={' Bruce McKenzie'}
     position={'Founder & CEO, Huddle'}
     />
     <Card02Component
     description={<p> Fylo has improved our team productivity by <br/>an order of magnitude. Since making <br/>the switch our team has 
  become a well-oiled<br/> collaboration machine.</p>}
     image={profile3}
     name={'Iva Boyd'}
     position={'Founder & CEO, Huddle'}
     />
      </div>
     
     <Card03Component/>
     <FooterComponent/>
     
     
    </>
  )
}

export default App
