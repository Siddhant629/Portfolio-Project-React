import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from './data/hero.json'
import Typed from "typed.js"

const Home = () => {
    const typedRef= useRef(null)
    useEffect(()=>{
        const options ={
            strings:["Welcom To my Profile" , "I am Siddhant Patil" , "I am a Software Developer" ],
            typeSpeed:50,
            backSpeed:50,
            loop:true
        }

        const typed = new Typed(typedRef.current, options)
        return ()=>{
            typed.destroy()
        }
    },[])
    return (
        <>
            <div className='container home' id='home'>
                <div className='left' >
                    <h1 ref={typedRef}></h1>
                    <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
                </div>
                <div className='right'>
                    <div className='img'>
                        <img src={`/assets/${hero.imgSrc}`} alt='hero'/>
                    </div>
                </div>
                
                </div>
        </>
    )
}

export default Home