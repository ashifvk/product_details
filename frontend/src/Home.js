import React from 'react'
import dd from './dd.webp'
import Nav from './Nav'

export default function Home() {
  return (
    <div>
        <Nav/>
       <div className='img'>
        <img src={dd} className='img-fluid'></img>
      </div>
    </div>
  )
}
