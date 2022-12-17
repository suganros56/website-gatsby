// Step 1: Import React
import * as React from 'react'
import Homelayout from '../components/homeLayout'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Homelayout pageTitle="About Me">
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Homelayout>
  )
}
export const Head = () => <Seo title="About Me" />  
// Step 3: Export your component
export default AboutPage

