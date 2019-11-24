import React from 'react';
import taxi from '../../img/taxi.jpg';

import './style.css';

const FirstComponent = () => {
  return (
    <div>
      <div className='container-imgtaxi-div'>
          <img src={taxi} alt='taxi' className='img-taxi'/>
          <div className='firstContainer-yellow'>
            <div className='container-p-initial'>
              <br/>
              <p><b>Comienza a viajar con LabCar</b></p>
              <button className='btn-download'><b>Descarga el app</b></button>
            </div>
          </div>

      </div>
      
    </div>
  )
}

export default FirstComponent;