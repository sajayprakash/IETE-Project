import React from 'react'
import Comittee_Card from './Comittee_Card'
import Footer from './Footer'

const Comittee = () => {
    return (
        <div className='section'>
            <div>
                <center><h1>COMITTEE MEMBERS</h1></center>
            </div>
            <div>
                <Comittee_Card></Comittee_Card>
                <Footer></Footer>
            </div>
        </div>
    )

}

export default Comittee