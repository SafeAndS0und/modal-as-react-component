import React, {useState} from 'react'
import './App.scss'
import Modal from './components/Modal/Modal.js'

const App = () =>{
   const [showModal, toggleShowModal] = useState(false)

   return (
      <div className="App">

         <Modal onExit={() => toggleShowModal(false)}
                showModal={showModal}/>

         <button className="show-modal"
                 style={{transform: `translateX(${!showModal ? 0 : -12}em)`}}
                 onClick={() => toggleShowModal(true)}>Zamawiam
         </button>

      </div>
   )
}

export default App
