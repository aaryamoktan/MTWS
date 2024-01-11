import React from 'react'
import Contact from '../Contact/Contact'
import { Link,useNavigate } from 'react-router-dom'
const img = require("../../images/l.png")
const img2 = require("../../images/floo.png")

const Home = () => {
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
      <div className='Homecontainer'>
        <div className='homeinnercontainer'>
          <div className='Logo'>
            <img src={img} style={{width:"100%"}} alt="logo" />
          </div>
          <div className='logoinfo'>
            <div className='logoinfoinner' style={{marginTop:"40px"}}>
              <p>MT Web solution is the one of the company in nepal made by all IT student . The main purpose of our comapany to Digitalize the Nepal.
                Our main goal to make  all Nepal Online even for rular areas.
                In context of Nepal many of school and college or government sector they dont have website.
                They used facebook page is main medium to shere information to ther student and worker associate with respective organization.
                So, To overcome these problem MT WEB SOLUTION plays vital role.
                We developed website according to your requirement.</p>
            </div>
          </div>
        </div>
        <div className='homd2nd reveal'>
          <div className='webdevlopment'>
            <div className='webdevelopmentinfo'>
              <h1>Web Development</h1>
              <p>MT WEB SOLUTION Pvt. Ltd. welcomes you with a bouquet of professional Web Application, Software services and promises to partner you through to a new level of functional excellence.
                We are a Nepal based Software Company located in Kathmandu with a national presence.</p>
            <Link to="/project"  onClick={()=>
            {
              window.scrollTo({top:0,left:0})
            }}><button type="submit">VIEW MORE</button></Link></div>
            
            <div className='image'>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className='this-is-us reveal'>
          <div className='thisimg'>
            <img src={require("../../images/web.jpg")} alt="img" />
          </div>
          <div className='this-info'>
            <h1>
              THIS IS US
            </h1>
            <p>
              MT WEB SOLUTION and the company are known best for their work and service they provide. The team take three major elements as their main weapon.
              For the purpose of best software service, Softech is always there for all.

              Similarly, all other software are tested in terms of security. we will always work as the best software company in Nepal.
            </p>
           <Link to="/about"  onClick={()=>
            {
              window.scrollTo({top:0,left:0})
              
            }} ><button type="submit">GOT TO KNOW US</button></Link> 
          </div>        </div>
        <div className='workwith '>
          <div className='workinfo'>
            <h1>
              HERE’S WHO WE’VE HELPED SO FAR
            </h1>
            <p>
              During the years, our company have connected with amazing clients to enable them with robust web and software applications to which has delivered outstanding results for their businesses.
              Our efforts and dedication helped many of our clients and they consider us as the best software company in Nepal.
            </p>
            <Link href="/project"  onClick={()=>
            {
              window.scrollTo({top:0,left:0})
            }}  style={{cursor:"pointer"}}><button type="submit">WE WORK WITH</button></Link>
          </div>
          <div className='workimg'>
            <img src={require("../../images/work.jpg")} alt="ldmf" />
          </div>
        </div>
        <div className='idea '>
          <div className='ideainner'>
            <h1>TELL US YOUR IDEAS OR PROBLEMS</h1>
            <p>We as a software company would like to solve problems and innovate the best for you. Come let’s work together with technology to automate your problems and empower your business. Softech is always for you and your company. We and our company consider clients as a precious element.</p>
            <Link to="/contact" onClick={()=>
            {
              window.scrollTo({top:0,left:0})
            }}><button type="submit">CONTACT US</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home