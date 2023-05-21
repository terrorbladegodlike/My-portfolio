import React from 'react'
import './footer.css'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer__container container">
            <h1 className="footer__title">Smith</h1>

            <ul className="footer__list">

               <li>
                  <a className='footer__link' href="#about">About</a>
               </li>

               <li>
                  <a className='footer__link' href="#portfolio">Projects</a>
               </li>

               <li>
                  <a className='footer__link' href="#testomonials">Testimonials</a>
               </li>

            </ul>

            <div className="footer__social">

               <a href="https://www.instagram.com/"   className="footer__social-link" target='_blank'>
                  <i class='bx bxl-instagram' ></i>
               </a>

               <a href="https://github.com/" className="footer__social-link" target='_blank'>
                  <i class='bx bxl-github' ></i>
               </a>

               <a href="https://t.me/phantomlancers" className="footer__social-link" target='_blank'>
                  <i class='bx bxl-telegram' ></i>
               </a>

            </div>

            <span className="footer__copy">&#169; Terrorbladegodlike. All rigths reserved</span>

         </div>
      </footer>
   )
}

export default Footer