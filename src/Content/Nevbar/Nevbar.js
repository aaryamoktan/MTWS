import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
const img = require("../../images/mttt.png")
const Nevbar = () => {
  const navigator = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="/">
    <img src={img} alt="myogo" style={{width:"100%",marginLeft:"-50%"}}/>
    <p style={{marginLeft:"-18%"}}>MT TECH</p>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" 
         onClick={()=>
        {
         
          
        }} class="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active" to="/service" 
         onClick={()=>
         {
          
         }}>Services</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link active"  to="/about" onClick={()=>
        {
         
        }}>About</Link>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Nevbar