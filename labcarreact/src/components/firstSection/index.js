import React from 'react';
import taxi from '../../img/taxi.jpg';

import './style.css';

const FirstComponent = () => {
  return (
    <div>
      <img src={taxi} alt='taxi' className='img-taxi'/>
      
    </div>
  )
}

export default FirstComponent;