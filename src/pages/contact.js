import React from 'react'
import Homelayout from '../components/homeLayout'
import Seo from '../components/seo'

function contact() {
  return (
    <div>
        <Homelayout pageTitle="Contact">
    <div className='space-y-5'>
    <p className="text-2xl text-bluelight text-center">What’s Next?</p>
    <h1 className="text-5xl font-bold hover:text-blue-300 text-center">Get In Touch</h1>
      <p className='text-center text-xl py-10 px-40'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
      
    <p className='text-center text-2xl py-5'><a href='mailto:suganros52@gmail.com' className='p-2 rounded-md border-double border-2 border-lightblue hover:bg-lightblue'>say hello</a></p>
    </div>
  </Homelayout>
  </div>
  )
}
export const Head = () => <Seo title="Contact" />
export default contact