import React from 'react'
import './Contact.css'
import love from '../images/love.jpg'
import email from '../images/email.jpg'
import map from '../images/map.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

const Contact = () => {
    return (
        <>
        <Navbar />
        <div className='pb-10'>
            <br></br>
            <br></br>

            <div className='fleeex'>
                <div className='boxx1'>
                    <h1>Contact us for more</h1>
                    <div className='space'></div>
                    <p className='subtxtttt'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                    <form  >
                        <div id="hello"><br></br><br></br>
                            <input type="text" placeholder="Contact-name"></input><br></br><br></br>

                            <input type="text" placeholder="Phone-number"></input><br></br><br></br>
                            <input type="email" placeholder="Email"></input><br></br><br></br>
                            <input type="text" placeholder="Message"></input> <br></br><br></br>
                            <br></br>
                            <button id="qwerty">Submit</button>
                        </div>

                    </form>

                    <div id="op2" className='space'>
                        <div className='rowwww'>
                            <img className='love' src={love} ></img>
                            <p>Phone<br></br><span className='blue' >111111</span></p>
                        </div>


                        <div className='rowwww'>
                            <img className='email' src={email} ></img>
                            <p>Email<br></br><a href="info@company.com">info@company.com</a></p>
                        </div>

                    </div>
                </div>
                <div>
                    <div id="qw">
                        <img className='slice spacex' src={map} id="meow"></img>
                        <address>
                            Iete Chennai Center,<br></br>
                            No:137,Conron Smith Road Center,<br></br>
                            Gopalapuram,Chennai-86.
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact