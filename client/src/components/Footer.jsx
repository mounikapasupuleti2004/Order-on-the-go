import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <h4>@MS foods- Have a feast with the tasty food everyday....</h4>
      <div className="footer-body">

        <ul>
          <li>Biriyani</li>
          <li>Pizza</li>
        </ul>

        <ul>
          <li>Beverages</li>
          <li>Burger</li>
        </ul>

        <ul>
          <li>Pulav's</li>
          <li>Rice bowls</li>
        </ul>

        <ul>
          <li>Fried Momo's</li>
          <li>Chicken</li>
        </ul>

        <ul>
          <li>Sandwich</li>
          <li>Fish fry</li>
        </ul>


      </div>
      <div className="footer-bottom">
        <p>@ MS foods.com - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer