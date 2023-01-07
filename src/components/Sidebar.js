import { Link } from 'gatsby'
import React from 'react'
import { IconBrandInstagram, IconBrandGithub , IconBrandLinkedin} from '@tabler/icons';

function Sidebar() {
  return (
    <div>
      <div className='sidebarlist absolute bottom-0 left-10 space-y-10'>
        <nav>
          <div className='space-y-5'>
        <ul >
          <li>
            <Link to="https://www.instagram.com/sugrosh/">
              <IconBrandInstagram />
            </Link>
          </li>
          <li>
            <Link to="https://github.com/suganros56">
            <IconBrandGithub/>
            </Link>
          </li>
          <li >
            <Link to="https://www.linkedin.com/in/roshan-suganthan-aa462b16b/">
              <IconBrandLinkedin/>
            </Link>
          </li>
          <li>
            <div>hrline</div>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Sidebar