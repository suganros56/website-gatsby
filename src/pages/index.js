// Step 1: Import React
import * as React from 'react'
import Seo from "../components/Seo"
import '../styles/global.css'

import Homelayout from '../components/homeLayout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>

      <Homelayout pageTitle="Home Page">
        <div className='space-y-5 m-20 p-10'>
        <p className="text-2xl text-lightblue">Hi, my name is</p>
        <h1 className="text-6xl font-bold hover:text-blue-300">Roshan Suganthan.</h1>
        <p className="text-5xl font-bold text-slate-400">
          I build things for the web.</p>
          <p className='text-xl mr-20 pr-10'>
          I’m a software engineer specializing in building (and occasionally designing) performant products with delightful user experiences. Currently, I’m focused on building disruptive, Fintech related products at <a className='text-lightblue' href='https://www.backspace.tech/'> BackSpace Tech.</a></p>
          
        </div>
      </Homelayout>
    </>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage