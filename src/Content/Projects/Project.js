import React from 'react'

const Project = () => {
  window.addEventListener('scroll',reveal)
    
  function reveal()
  {
      var reveal = document.querySelectorAll('.reveal');
      for( var i=0;i<reveal.length;i++)
      {
          var windowheight=window.innerHeight;
          var revealtop=reveal[i].getBoundingClientRect().top;
          var revealpoint=150;
          if(revealtop<windowheight-revealpoint)
          {
              reveal[i].classList.add('active');
          }
      }
  }
 
  return (
    <>
      <div className='projectcontainer'>
        <div className='projectinner reveal'>
          <div className='projectimg'>
            <img src={require("../../images/web2.jpg")} />
            <p>MT WEB SOLUTION</p>
          </div>
        </div>
        <div className='projectname '>
          <h1>Projects</h1>
          <div className='project1 reveal'>
            <div className='img'>
              <a href="https://aaryamoktan.onrender.com" target="blank"><img src={require("../../images/aaryap.jpg")} alt="myimage" /></a>
            </div>
            <div className='imginfo '>
              <h1>Protfilio</h1>
              <p>In this type project we can create your Protfilio.
              that can reflect your skills and experince  in online   </p>
            </div>

          </div>
          <div className='project2 reveal'>
            <div className='img'>
            <a href="https://relinceflooringandengineeringservice.onrender.com" target="blank">  <img src={require("../../images/floo.png")} alt="" /></a>
            </div>
            <div className='imginfo'>
              <h1>Reliance flooring and engineering services</h1>
              <p></p>
            </div>
          </div>
          <div className='project3 reveal'>
            <div className='img'>
             <a href="https://carrental-8wvp.onrender.com" target="blank"><img src={require("../../images/car.png")} alt="nd" /></a> 
            </div>
            <div className='imginfo'>
              <h1>ABPP carrental</h1>
              <p></p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Project