import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'
import Sidebar from 'my-gatsby-site\src\components\Sidebar.js'



const Homelayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Navbar/>
      <Sidebar />
    <div className="relative mx-12 px-10 mt-5">
       {/* <header  className="text-5xl text-yellow-500 py-5 ">Hi I'm Roshan Suganthan</header> */}
      <main>
        {children}
      </main>
    </div>
    </>
  )
}

export default Homelayout