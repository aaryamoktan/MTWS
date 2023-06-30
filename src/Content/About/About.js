import React from 'react'

const About = () => {
  return (
    <>
      <div className='Aboutcontainer'>
        <div className='Aboutconatinerinner1'>
          <div className='img'>
            <img src={require("../../images/abt1.jpg")} alt="" />
          </div>
          <div className='info'>
            <h1>Our Goal</h1>
            <p>Understanding your web development goals is critical to the long-term success of your website. Before you begin the web development process, your organization should clearly define the business goals that it hopes to achieve through the website. Without clear website goals, your project will be aimless, and there is no guarantee that your business will see any benefit from website development.
              It doesn’t matter if you are doing a website redesign or building a new website. You need to clearly define your business goals. Maintaining a digital presence is crucial in the modern business world. Let’s explore common business goals and how you can achieve them with your website. </p>
          </div>

        </div>
        <div className='Aboutconatinerinner2'>
          <div className='img'>
            <img src={require("../../images/abt3.jpg")} alt="" />
          </div>
          <div className='info'>
            <h1>Our Target</h1>
            <p>We offer comprehensive web design and development services that are tailored to meet the unique needs of your business. Our team of experienced designers and developers work closely with you to create a website that not only looks great but also functions seamlessly. We focus on creating a user-friendly experience for your visitors, ensuring that your website is easy to navigate and optimized for conversions</p>
          </div>

        </div>
        <div className='Aboutconatinerinner3'>
        <div className='info'>
          <h1>We Work On</h1>
          <p>The term “web development tools” refers to software and apps that provide web developers with the ability to debug and test the code and interface of the website or application they're creating. Technically speaking, the term “web development tools” refers to the products used to debug and test.</p>
        </div>
          <div className='img'>
            <img src={require("../../images/abt2.png")} alt="" />
          </div>
        </div>
        <div className='Aboutconatinerinner4'>
        
          <div className='img'>
            <img src={require("../../images/abt4.jpeg")} alt="" />
          </div>
          <div className='info'>
          <h1>MyTeam</h1>
          <p>Working together enables us to tackle big projects and audacious goals that just wouldn't be possible alone.  Effective teamwork empowers us to reach our goals and have far more impact.

Teamwork stretches far beyond making the best snow fort or carrying the heaviest objects. But not everyone sees the value and benefits that a group of people working together can accomplish. </p>
        </div>
          
        </div>
      </div>
    </>
  )
}

export default About