import React from 'react'

const Service = () => {
    return (
        <>
            <div className='serviceContainer'>
                <div className='servicecontainerrinner'>
                    <h1>Our Services</h1>
                    <div className='serviceCard ' style={{ display: "flex", flexWrap: 'wrap', justifyContent: "center", margin: "50px" }}>
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "30px" }}>

                            <div class="card-body " style={{ textAlign: "center" }}>
                                <h5 class="card-title">WEB-DESIGN</h5>
                                <p class="card-text">Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality. Web design also includes web apps,
                                    mobile apps, and user interface (UI) design, and user experience (UX). </p>

                            </div>
                        </div>
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "30px" }}>

                            <div class="card-body">
                                <h5 class="card-title">WEB DEVELOPMENT</h5>
                                <p class="card-text">Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.</p>

                            </div>
                        </div>
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "30px" }}>

                            <div class="card-body">
                                <h5 class="card-title">SOCILA MEDIAN MARKETTING</h5>
                                <p class="card-text">Social media marketing (also known as digital marketing and e-marketing) is the use of social media—the platforms on which users build social networks and share information—to build a company's brand, increase sales, and drive website traffic.</p>
                            </div>
                        </div>
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "30px" }}>

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
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "20px" }}>

                            <div class="card-body">
                                <h5 class="card-title">WEB HOSTING</h5>
                                <p class="card-text">Web hosts provide the hosting technology and resources required for the effective and secure operation of your website. They are responsible for keeping the server up and running, implementing hosting security measures, </p>

                            </div>
                        </div>
                        <div class="card" style={{ width: "25%", height: "35vh", margin: "20px" }}>

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
                            <h1>E-commerce</h1>
                            <div className='webtypeimg'>
                            <img src="" alt="myimg"/>
                            </div>
                            <div className='webtypeinformation'>
                                <p>desc</p>
                            </div>
                        </div>
                        <div className='webType2'>
                            <h1>Bussiness</h1>
                            <div className='webtypeimg'>
                                <img src="" alt="myimg"/>
                            </div>
                            <div className='webtypeinformation'>
                            <p>desc</p>
                            </div>
                        </div>
                        <div className='webType3'>
                            <h1>college/school</h1>
                            <div className='webtypeimg'>
                            <img src="" alt="myimg"/>
                            </div>
                            <div className='webtypeinformation'>
                            <p>desc</p>
                            </div>
                        </div>
                        <div className='webType4'>
                            <h1>social-media</h1>
                            <div className='webtypeimg'>
                            <img src="" alt="myimg"/>
                            </div>
                            <div className='webtypeinformation'>
                            <p>desc</p>
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