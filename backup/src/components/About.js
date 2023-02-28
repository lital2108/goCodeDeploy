import React from 'react'
import {useNavigate} from 'react-router-dom';
import "./About.css"
const About = () => {
  const navigate = useNavigate();

  return (
      <div className='aboutPage'>
        <p>Hello and welcome to our Online Shopping store,</p> 
          <p>the place to find the best clothes for every taste and occasion.</p>
          <tr><td colSpan="2">&nbsp;</td></tr>

          <p> We thoroughly check the quality of our goods,</p> 
          <p>working only with reliable suppliers so that you only receive the best quality product.</p>
          <tr><td colSpan="2">&nbsp;</td></tr>

          <p>We at Online Shopping believe in high quality and exceptional customer service.</p> 
          <tr><td colSpan="2">&nbsp;</td></tr>

          <p>But most importantly, we believe shopping is a right, not a luxury,</p>
          <p> so we strive to deliver the best products at the most affordable prices,</p> 
            <p>and ship them to you regardless of where you are located.</p>
            <tr><td colSpan="2">&nbsp;</td></tr>

      <button className='startShopping' onClick={()=>{navigate('/')}}>Lets Start Shopping!</button>
      </div>
  )
}

export default About