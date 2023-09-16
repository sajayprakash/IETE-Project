import { useState, useEffect, useRef } from 'react';
// import { useSpring, animated } from "react-spring"

// function Number({ n }) {
//     const { number } = useSpring({
//         from: { number: 0 },
//         number: n,
//         delay: 200,
//         config: { mass: 1, tension: 20, friction: 10 },
//     });
//     return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
// }



const Card = () => {

//     const targetRef = useRef(null);
//     const [pixelsFromTop, setPixelsFromTop] = useState(null);


//     const [scrollHeight, setScrollHeight] = useState(0);
//     useEffect(() => {


//         const handleScroll = () => {
//             setScrollHeight(window.scrollY);
//         };

//         if (targetRef.current) {
//             const rect = targetRef.current.getBoundingClientRect();
//             const pixelsFromTop = rect.top + window.scrollY;
//             setPixelsFromTop(pixelsFromTop);
//         }
//         handleScroll();

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);


    return (
        <>
            <div className='bottom'>
                <div className='border_box'>
                {/* ref={targetRef} */}
                    <div className='flex_col' >
                    {/* {scrollHeight > ((pixelsFromTop)/4) ? <Number n={6969}></Number> : 0} */}
                        <h1></h1>
                        <h1>STUDENTS</h1>
                    </div>
                    <div className='flex_col'>
                    {/* {scrollHeight > ((pixelsFromTop)/4) ? <Number n={69}></Number> : 0} */}
                        <h1></h1>
                        <h1>STAFF</h1>
                    </div>
                    <div className='flex_col'>
                    {/* {scrollHeight > ((pixelsFromTop)/4) ? <Number n={6969}></Number> : 0} */}
                        <h1></h1>
                        <h1>EVENTS</h1>
                    </div>
                    <div className='flex_col'>
                    {/* {scrollHeight > ((pixelsFromTop)/4) ? <Number n={69}></Number> : 0} */}
                        <h1></h1>
                        <h1>COLLEGES</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card