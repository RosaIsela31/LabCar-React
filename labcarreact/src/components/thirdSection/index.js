import React from 'react'
import drive from '../../img/conduce.jpg'
import './style.css';

const ThirdSection = () => {
  return (
    <div>
      <div className='container-drive'>
        <img src={drive} alt='drive' className='drive' />
        <div className='rgba-drive'>
          <div className='text-thirdcontainer'>
            <br/>
            <p><b>
              Conduce cuando quieras </b><br/>
              LabCar es una opción flexible para alcanzar 
              tus metas financieras
            </p>
            <br/>
            <div className='container-button'>
                <button className='btn-thirdsection'>
                  <b>
                  Conviértete en Conductor
                  </b>
                </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ThirdSection;