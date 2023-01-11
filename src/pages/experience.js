import React from 'react'
import Homelayout from '../components/homeLayout'
import Seo from "../components/Seo"


function experience() {
    return (
       
        <div>
            <Homelayout pageTitle="Experience">
            <div className='space-y-1 mx-20 px-20'>
                <h3 class="text-2xl text-bluelight mb-6 -ml-3">Experience</h3>

                <ol class="border-l-2 border-blue-600">
                    <li>
                        <div class="md:flex flex-start">
                            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                            </div>
                            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                                <div class="flex justify-between mb-4">
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Backspace Tech</a>
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">07 / 09 / 2022</a>
                                </div>
                                <p class="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div class="md:flex flex-start">
                            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                </svg>
                            </div>
                            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                                <div class="flex justify-between mb-4">
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Deloitte USI</a>
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">19 / 07 / 2021</a>
                                </div>
                                <p class="text-gray-700 mb-6">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
                                 </div>
                        </div>
                    </li>
                    <li>
                        <div class="md:flex flex-start">
                            <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                                </svg>
                            </div>
                            <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                                <div class="flex justify-between mb-4">
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">Healthy KID</a>
                                    <a href="#!" class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm">21 / 07 / 2020</a>
                                </div>
                                <p class="text-gray-700 mb-6">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
                                </div>
                        </div>
                    </li>
                </ol>
</div>


            </Homelayout>
            
        </div>
    )
}
export const Head = () => <Seo title="Exprience Page" />
export default experience