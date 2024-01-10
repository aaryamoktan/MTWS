import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='footer' style={{position:"relative"}}>
            <div className='footercontaint1'>
            <h1>Information</h1>
            <p>Find best solution for your company ,protfilio,school,college
            to develop website</p>
            </div>
            <div className=' footercontaint2'>
            <h1>Contact</h1>
            +977 9803071043  / +977 9814826533 
            <br/>
            
           <p>Email: mtwebsolution4@gmail.com</p>
            </div>
            <div className='footercontaint3'>
            <h1>Social-Media</h1>
            <a href="https://www.facebook.com/profile.php?id=61555124925505&mibextid=eHce3h" target="blank"><i class="fa-brands fa-square-facebook">{<ImFacebook2/>}</i></a>
            <br/>
            <a href="/" target="blank"><i class="fa-brands fa-square-instagram" style={{}}><BsInstagram/>
            </i></a>
            <br/>
            <a href="/" target="blank"><i class="fa-brands fa-square-twitter"></i><FaSquareTwitter/></a>
            </div>
        </div>
    )
}

export default Footer