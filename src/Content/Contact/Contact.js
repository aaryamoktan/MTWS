import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
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
   
    const Nevigation = useNavigate();
    const submit = (evt) => {
        alert("thanks your ides or feedback");
        Nevigation("/")
    }
    return (
        <div className='Contact  '>
            <div className='nepalimg '>
                <img src={require("../../images/nepal.png")} alt="" />
            </div>
            <div className='Nepalsologon reveal '>
                <h1>Let Digitalize Nepal</h1>
            </div>
            <div className='form '>
                <div className='forminfo '>
                    <h1>Contact</h1>
                    <p>Hey feel free to shere what you feel</p>
                </div>
                <div className='form_details'>
                    <form onSubmit={submit}>
                        <lable>Name:</lable><br />
                        <input type="text" name="name" required />
                        <br />
                        <lable>Email:</lable>
                        <br />
                        <input type="Email" name="Email" required />
                        <br />
                        <lable>Quearys:</lable>
                        <br />
                        <input type="text" className='queries' name="Quearys" required />
                        <br />
                        <button type="submit" >Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact