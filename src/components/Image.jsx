import React from 'react'
import './About.css'

const Image = () => {

    const data = [
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' },
        { 'image': '""', "name": 'college name' }
    ]

    return (
        <>
        <div className='txt'><h2>List of colleges:</h2></div>

            <div className='image_preview'>
                {data.map((value) => {
                    return (
                        <>
                            <div className='image_container'>
                                <div className='image'><img src={value.image}></img></div>
                                <div className='text'>{value.name}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Image