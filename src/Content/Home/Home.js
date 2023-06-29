import React from 'react'
const img = require("../../images/logo.png")
const Home = () => {
  return (
    <>
      <div className='Homecontainer'>
        <div className='homeinnercontainer'>
          <div className='Logo'>
            <img src={img} alt="logo"/>
          </div>
          <div className='logoinfo'>
            <div className='logoinfoinner'>
              <p>MT Web solution is the one of the company in nepal made by all it student . The main purpose of our comapany to degitilized the Nepal.
              Our main goal to make  all Nepal Online even for rular areas.
              In context of Nepal many of school and college or government sector they dont have website.
              They used facebook page is main medium to shere information to ther student and worker associate with respective organization.
              So, To overcome these problem MT WEB SOLUTION plays vilal role.
              We developed website according to your requirement.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home