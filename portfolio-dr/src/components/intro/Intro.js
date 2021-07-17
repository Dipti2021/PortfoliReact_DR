import React, { useEffect, useRef } from 'react'
import'./intro.scss'
import { init } from 'ityped'


export default function Intro(){
    const textRef = useRef();//hook
    useEffect(()=>{
        init(textRef.current, { showCursor: true, backSpeed:  60,  backDelay:1500, strings: [' Developer', ' Engineer','Educator',' Movie Buff' ],//backdelay in sec
    }); //taken from the ityped pagefor react
        

        
    },[]
    
    );


    return(
        <div className='intro'  id = 'intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src ='assets/DR.jpg'alt=''/>
                </div>
            </div>
            
            <div className='right'>
                <div className='wrapper'>
                    <h2>Welcome, I am</h2>
                    <h1>Dipti Razdan</h1>
                    <h3><span ref ={textRef}></span></h3>
                </div>
                <div className='itemContainer'>
                        <a href='#portfolio'>
                            <img src='assets/down.png' alt='d'/>
                        </a>
                </div>
            </div>
           
        </div>
    )
}