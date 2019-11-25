import React from 'react';
import LabCarView from './views/labcarView'
import './App.css';

import ModalRegister from './modals/register/Register';
// import ModalLogin from './modals/login/ModalLogin';

function App() {
  return (
    <div className="App">
      {/* <LabCarView /> */}
      {/* <ModalLogin /> */}
      <ModalRegister/>
     
    </div>
  );
}

export default App;
