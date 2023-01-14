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
                        About
                    </Link>
                </div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/experience">
                        Experience
                    </Link></div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/work">
                        Work
                    </Link></div>
                <div class="px-3 py-3 flex justify-center">
                    <Link to="/contact">
                        Contact
                    </Link></div>
                <div class="px-3 py-1 flex justify-center">
                    <Link to="https://drive.google.com/file/d/1ognRyb4eVm_KkCTA70S7YGLG0GQzzsO2/view?usp=sharing">
                        <div className=' p-2 rounded-full border-double border-2 border-lightblue hover:bg-lightblue'>Resume</div>
                    </Link></div>
            </div>

        </div>
    )
}

export default Navbar