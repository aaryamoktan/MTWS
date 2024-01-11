import React, { useEffect, useState } from 'react'
const img1 = require("../../images/ecommerse.png");
const img2 = require("../../images/floo.png")
const img3 = require("../../images/blog.png")
const img4 = require("../../images/car.png")
const Service = () => {
    const [name,setname] = useState()
    useEffect(()=>
    {
        setTimeout(() => {
            
        }, 1);
    },[name])
    return (
        <>
            <div className='serviceContainer'>
                <div className='servicecontainerrinner'>
                    <h1>Our Services</h1>
                    <div className='serviceCard ' style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", margin: "50px" }}>
                        <div class="card" >

                            <div class="card-body " style={{ textAlign: "center" }}>
                                <h5 class="card-title">WEB-DESIGN</h5>
                                <p class="card-text">Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality. Web design also includes web apps,
                                    mobile apps, and user interface (UI) design, and user experience (UX). </p>
                            </div>
                        </div>
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">WEB DEVELOPMENT</h5>
                                <p class="card-text">Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>

                            </div>
                        </div>
                        <div class="card" >

                            <div class="card-body">
                                <h5 class="card-title">SOCILA MEDIAN MARKETTING</h5>
                                <p class="card-text">Social media marketing (also known as digital marketing and e-marketing) is the use of social media—the platforms on which users build social networks and share information—to build a company's brand, increase sales, and drive website traffic.</p>
                            </div>
                        </div>
                        <div class="card" >

                            <div class="card-body">
                                <h5 class="card-title">MOBILE APP DEVELOMENT</h5>
                                <p class="card-text">
                                    Join a developer program
                                    Related Solutions
                                    Resources
                                    Take the next step
                                    What is mobile application development?
                                    Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. </p>

                            </div>
                        </div>
                        <div class="card" >

                            <div class="card-body">
                                <h5 class="card-title">WEB HOSTING</h5>
                                <p class="card-text">Web hosts provide the hosting technology and resources required for the effective and secure operation of your website. They are responsible for keeping the server up and running, implementing hosting security measures, </p>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">DOMAIN REGISTRATION</h5>
                                <p class="card-text">Domain name registration is necessary for a website, an email, or another web service. However, you don’t have to always register a new domain name. Many companies allow you to use subdomains of their domain names for a website, or you can have an email with their primary domain (ex. yahoo.com, gmail.com).</p>
                            </div>
                        </div>
                    </div>
                    <h1>Types of Websites we Work</h1>
                    <div className='serviceWeb'>
                        <div className='servicewebInner'>
                            <div className='webType1'>
                                <div className='webtypeimg'>
                                    <img src={img1} alt="myimg" />
                                </div>
                                <div className='webtypeinformation'>
                                    <h1>E-commerce</h1>
                                    <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.

                                        It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

                                        The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

                                        In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow consumers to shop from nearly anywhere.

                                    </p>
                                </div>
                            </div>
                            <div className='webType2'>

                                <div className='webtypeimg'>
                                    <img src={img2} alt="myimg" />
                                </div>
                                <div className='webtypeinformation'>
                                    <h1>Bussiness</h1>
                                    <p>A business website is an online platform that represents a company or organization on the internet. It serves as a digital storefront where potential customers can learn about the business, browse products or services, and make purchases. The purpose of a business website is to provide information about the company, its products or services, and its values to potential customers. It also serves as a way for customers to contact the business, make inquiries, and place orders. In addition to its primary function as a marketing and sales tool, a business website can also be used to communicate with stakeholders, such as employees, partners, and investors.</p>
                                </div>
                            </div>
                            <div className='webType3'>

                                <div className='webtypeimg'>
                                    <img src={img4} alt="myimg" />
                                </div>
                                <div className='webtypeinformation'>
                                    <h1>college/school</h1>
                                    <p>At a time where students are questioning the value of college, website personalization helps counter their concerns with information tailored to their unique interests and goals. Everyone likes to have their wants and needs acknowledged. Personalization does this by integrating behavioral data into your school’s content delivery framework so that each student is presented with a customized learner journey. When programs of interest are displayed with clear paths from enrollment to graduation to job, students understand what is needed to succeed and the ultimate return on their academic investment.

                                        Website personalization is also beneficial for institutions. Nearly 70% of students say that the school’s website is a main influence on their college decision-making. It’s only natural for students who enjoy an engaging, intuitive and interactive experience on your website to further explore all your school has to offer.  </p>
                                </div>
                            </div>
                            <div className='webType4'>

                                <div className='webtypeimg'>
                                    <img src={img3} alt="myimg" />
                                </div>
                                <div className='webtypeinformation'>
                                    <h1>social-media</h1>
                                    <p>Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration.

                                        People use social media to stay in touch and interact with friends, family and various communities. Businesses use social applications to market and promote their products and track customer concerns.

                                        Business-to-consumer websites include social components, such as comment fields for users. Various tools help businesses track, measure and analyze the attention the company gets from social media, including brand perception and customer insight.

                                        Social media has enormous traction globally. Mobile applications make these platforms easily accessible. Some popular examples of general social media platforms include Twitter, Facebook and LinkedIn.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service