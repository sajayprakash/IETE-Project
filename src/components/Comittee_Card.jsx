import React from 'react'

const Comittee_Card = () => {

    const data = [
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' },
        { 'image': '""', "name": 'member name',"role": 'member role' }
    ]

    return (
        <>
            <div className='comittee_preview'>
                {data.map((value) => {
                    return (
                        <>
                            <div className='comittee_container'>
                                <div className='comittee_image'><img src={value.image}></img></div>
                                <div className='comittee_text'>{value.name}</div>
                                <div className='comittee_text'>{value.role}</div>
                                <span className='space'></span>
                                <div className='comittee_text'>Linked IN</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )

}

export default Comittee_Card