import React from 'react'
// import './About.css'
// import './About.css'
import Card from './Card'
import Aboutmid from './About_mid'
import Footer from './Footer.jsx'
import Image from './Image.jsx'
import Nav from './Nav'
import Comittee from './Comittee'
import Events from './Events'

const About = () => {
    return (
        <div className='container'>
            <div className='box'>
                <Nav></Nav>
                <Aboutmid></Aboutmid>
                <Card></Card>
                <Image></Image>
                <Footer></Footer>
            </div>
            {/* <Comittee></Comittee> */}
            <Events></Events>
        </div>
    )
}

export default About