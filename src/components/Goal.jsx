import React from 'react'
import './About.css'
import logo from '../images/Vector.svg'

const Goal = () => {

    const data = [
        { 'title': 'Vision:', 'content': 'Reaching the un-reached and empowering the youth through Technical Education and Skill Development.' },
        { 'title': 'Mission:', 'content': 'Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to   contribute in Nation’s Human Resource & Infrastructure Development through our Engineers' },
        { 'title': 'Motives:', 'content': "IETE is helping it's students to learn and grow in the emerging field of Electronics and Telecommunication. One of the missions of IETE is to provide the best mode of studying a Btech degree programme." }
    ]

    return (
        <>
            <div className='title'>
                <h1>
                    GOALS
                </h1>
            </div>
            {data.map((value) => {
                return (<>
                    <div className='content'>
                        {/* center */}
                        <div className='center'>
                            <div className='flex_row'>
                                <div className="heading">
                                    <img src={logo} alt='logo'></img>
                                    <h3>{value.title}</h3>
                                </div>
                                <h4 className='inner_content'>{value.content}</h4>
                            </div>

                        </div>
                    </div>
                </>)
            })}
            <div className='spacee'></div>
        </>
    )
}

export default Goal