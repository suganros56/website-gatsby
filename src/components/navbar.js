import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Navbar() {
    return (
        <div>
            <div className=' navbarlist block grid grid-flow-row-dense grid-cols-12 grid-rows-1'>
                <div class="col-span-7 px-4 py-3 ">
                    <Link to='/'>
                   <StaticImage
                        src="../images/logo.png" width={40} height={40}/>
                    </Link>
                </div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/about">
                        01.About
                    </Link>
                </div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/experience">
                        02.Experience
                    </Link></div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/work">
                        03.Work
                    </Link></div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/contact">
                        04.Contact
                    </Link></div>
                <div class="px-3 py-1 flex justify-center">
                    <Link to="/">
                        <div className=' p-2 rounded-full border-double border-2 border-lightblue hover:bg-lightblue'>Resume</div>
                    </Link></div>
            </div>

        </div>
    )
}

export default Navbar