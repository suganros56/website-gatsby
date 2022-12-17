import { Link } from 'gatsby'
import React from 'react'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'
import { IconBrandInstagram } from '@tabler/icons';

function Sidebar() {
  return (
    <div>
        <nav className='block'>
        <ul className="block px-0">
          <li>
            <Link to="/">
              <IconBrandInstagram />
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li >
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar