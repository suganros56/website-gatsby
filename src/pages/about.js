// Step 1: Import React
import * as React from 'react'
import Homelayout from '../components/homeLayout'
import Seo from 'my-gatsby-site/src/components/Seo.js'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Homelayout pageTitle="About Me">
      <div className='space-y-3'>
      <h1 className='text-4xl' >About Me</h1>
      <p className='text-xl py-3'>Hello! My name is Roshan and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to recreating simple apps — turns out recreating small webapp taught me a lot about Frontend and Backend!</p>
    <p className='text-xl py-2'>Fast-forward to today, and I’ve had the privilege of working at FinTech, SASS start-up. My main focus these days is building disruptive products with a huge usecase to solve. also recently launched a Blog that covers everything you need to build a constraint solver with optaplanner using Java & React.</p>  <p className='text-xl py-2'>Here are a few technologies I’ve been working with recently:</p>
    <ul class="mx-10 list-disc grid grid-cols-2 gap-4">

      <li>
      JavaScript (ES6+)
      </li>
      <li>
      Java
      </li>
      <li>
      Quarkus
      </li>
      <li>
      TypeScript
      </li>
      <li>React</li>
      <li>Optaplanner</li>
      <li>Node.js</li>
      <li>graphQL</li>
</ul>
</div>
    </Homelayout>
  )
}
export const Head = () => <Seo title="About Me" />  
// Step 3: Export your component
export default AboutPage

