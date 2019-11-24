import React from 'react'
import phone from '../../img/celular.png'
import './style.css'

const SecondSection = () => {
  return (
    <div className='second-section'>
      <div className='container-imgmobile'>
        <br/>
        <p>La nueva App</p>
        <br/>
        <img src={phone} alt='phone' className='phone' />


      </div>
      
    </div>
  )
}

export default SecondSection;
