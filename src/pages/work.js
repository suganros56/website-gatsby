import React from 'react'
import Homelayout from '../components/homeLayout'

function work() {
  return (
    <div><Homelayout pageTitle="Work">
    <div className='space-y-5'>
    <p className="text-xl text-bluelight">Some Things I’ve Built</p>
    <h1 className="text-5xl font-bold hover:text-blue-300">Project1</h1>
    <p className="text-4xl font-bold">
    Featured Project</p>

    
    <h1 className="text-5xl font-bold hover:text-blue-300">Project2</h1>
    <p className="text-4xl font-bold">
    Featured Project</p>
      
    <h1 className="text-5xl font-bold hover:text-blue-300">Project3</h1>
    <p className="text-4xl font-bold">
    Featured Project</p>
      
      
    </div>
  </Homelayout></div>
  )
}

export default work