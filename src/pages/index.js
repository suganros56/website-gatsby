// Step 1: Import React
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/global.css'
import Navbar from '../components/navbar'
import Homelayout from '../components/homeLayout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>

      <Homelayout pageTitle="Home Page">
        <p className="text-xl">Hi, my name is</p>
        <h1 className="text-5xl font-bold">Roshan Suganthan.</h1>
        <p className="text-4xl font-bold">
          I build things for the web.</p>
          <p>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Homelayout>
    </>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage