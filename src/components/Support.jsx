import React from 'react'
import '../styles/Support.css'
import '../styles/Media.css'
import SupportImg from '../assests/Contact.jpeg'
import Support1 from '../assests/Support-1.png'
import Support2 from '../assests/Support-2.png'

const Support = () => {
  return (
    <>
    <div className="box-1">
        <div className="box-1-item">
          {/* <h1 className='Text-Inimg'>SUPPORT</h1> */}
          <img src={SupportImg} className='box-1-img' alt="" />
        </div>
    </div>
    <div className="box-2">
      <div className="box-2-item">
        <img src={Support1} height={200} alt="" />
        <div className="main-Text">
          <h1>Support</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam tenetur dolores eveniet aperiam, eligendi nihil sapiente officiis voluptatem velit impedit quod dolore esse ipsa eos quidem temporibus. Accusamus, beatae.</p>
        </div>
      </div>
      <div className="box-2-item">
      <img src={Support2} height={200}  alt="" />
        <div className="main-Text">
          <h1>Support</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam tenetur dolores eveniet aperiam, eligendi nihil sapiente officiis voluptatem velit impedit quod dolore esse ipsa eos quidem temporibus. Accusamus, beatae.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Support