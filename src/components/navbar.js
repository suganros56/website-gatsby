import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Navbar() {
    return (
        <div>
            <div className='grid grid-flow-row-dense grid-cols-12 grid-rows-1'>
                <div class="col-span-7 px-3 py-3">Logo
                <StaticImage
                src='' />
                </div>
                <div class="px-3 py-3 flex justify-center">01.About</div>
                <div class="px-3 py-3 flex justify-center">02.Experience</div>
                <div class="px-3 py-3 flex justify-center">03.Work</div>
                <div class="px-3 py-3 flex justify-center">04.Contact</div>
                <div class="px-3 py-3 flex justify-center">Resume</div>
            </div>

        </div>
    )
}

export default Navbar