import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Learn How To Create Full Stack Ecommerce Website Using React JS, MongoDB, Express JS and Node JS | React JS Project to Make Full Stack E-Commerce Website</p>
            <p>
                In this single tutorial we will make a full stack eCommerce website using (MERN) React JS, MongoDB, Express and Node JS or Online Store using React JS. We will make the e-commerce front-end website to display products, product cart and login registration page using React JS.
                </p>
        </div>

    </div>
  )
}

export default DescriptionBox
