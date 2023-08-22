import React from 'react'
import '../styles/Home.css'
import '../styles/Media.css'

import SpecialDisccount from '../assests/Special Offer.jpg'
import ZeroPhoto from '../assests/HeadPhoto.png'


const Homemain = () => {
  return (
    <>
        <div className="Zero-Box">
     <div className="Zero-Item">
        <img src={ZeroPhoto} alt=""/>
     </div>
     </div>
    <div className="Second-Box">
        <div className="Second-Item">
            <img src={SpecialDisccount} width={600} alt="" />
        </div>
        <div className="Second-Item">
            <h1>Special <span>Offer!!!</span></h1>
            <h4><span>SpecialOffer about</span> dolor sit amet consectetur adipisicing elit. Dolorem eius quisquam <span>provident</span> excepturi autem ad quas nulla voluptates!</h4>
        </div>
    </div>

    <div className="Main-Box">
        <div className="Main-Item">
            <h1 className='my-5'>My <span>Store</span> </h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi obcaecati eos sint consectetur velit incidunt accusantium necessitatibus blanditiis. Atque provident quia, a optio vero ad aperiam architecto temporibus voluptatibus, doloremque iusto! Accusamus voluptate fugiat atque labore itaque, aperiam officiis qui numquam, possimus dicta?</p>
        </div>
    </div>
    </>
  )
}

export default Homemain