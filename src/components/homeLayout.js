import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    heading
  } from './layout.module.css'

import Navbar from './navbar'
import Sidebar from './sidebar'



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
    <div className="flex m-20">
       {/* <header  className="text-5xl text-yellow-500 py-5 ">Hi I'm Roshan Suganthan</header> */}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </>
  )
}

export default Homelayout