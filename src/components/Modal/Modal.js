import React, {useState} from 'react'
import './Modal.scss'
import Ramka from '../SVG/Ramka'
import Naglowek from '../SVG/Naglowek'
import Monety from '../SVG/Monety'
import MonetyPrawa from '../SVG/MonetyPrawa'
import Gwiazdka from '../SVG/Gwiazdka'

const Modal = ({onExit, showModal}) =>{

   const [paypalActive, togglePaypalActive] = useState(true)

   return (
      <div className="modal" style={{
         transform: `translateY(${showModal ? 0 : -100}vh)`,
         opacity: showModal ? 1 : 100
      }}>
         <Ramka background="#1E272A" onExit={onExit}/>

         <header>
            <Naglowek/>
            <h2>ZOSTAŃ VIPEM</h2>
         </header>

         <div className="modal-content">

            <section className="modal-content__price">
               <Monety width={75}/>
               <h1>9,99 PLN</h1>
               <MonetyPrawa width={75}/>
            </section>

            <section className="modal-content__payment">

               <div className="modal-content__btn modal-content__btn--paypal"
                    style={{
                       filter: paypalActive ? 'none' : `grayscale(100%)`,
                       opacity: paypalActive ? 1 : .25
                    }}
                    onClick={() => togglePaypalActive(true)}>

                  { paypalActive && <Gwiazdka/> }

                  <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png"
                       alt="paypal logo"/>
               </div>


               <div className="modal-content__btn modal-content__btn--credit-card"
                    style={{
                       filter: !paypalActive ? 'none' : `grayscale(100%)`,
                       opacity: !paypalActive ? 1 : .25
                    }}
                    onClick={() => togglePaypalActive(false)}>

                  { !paypalActive && <Gwiazdka/> }

                  <img src="https://i.ibb.co/yQ9G27s/karty-kolor.png"
                       alt="karta kredytowa"/>
                  <h3>Karta Kredytowa</h3>
               </div>


            </section>

         </div>

         <div className="modal__pay-button">
            <h3>ZAPŁAĆ</h3>
         </div>

      </div>
   )
}

export default Modal