import { IconBrandGithub } from '@tabler/icons'
import { Link } from 'gatsby'
import React from 'react'
import Homelayout from '../components/homeLayout'
import Seo from "../components/Seo"

function work() {
  return (
    <div><Homelayout pageTitle="Work">
      <div className='space-y-5'>
        <p className="text-2xl text-bluelight ml-10">Some Things I’ve Built</p>
        <ul>
          <li>
            <div className='project1 m-10'>
            <p className="text-xl font-bold text-lightblue flex justify-start"> Featured Project</p>
              <h1 className="text-4xl font-bold hover:text-blue-300 flex justify-start">Admit predictor</h1>
              <div class="float-right bg-lightblue rounded-lg p-6 shadow-md w-2/5 mt-10">
                <h2 class="text-lg font-medium mt-4 flex justify-end">Admit predictor</h2>
                <p class="text-gray-600 mt-2 flex justify-end">predicts the chance of getting admit in Top tier college</p>
                <div class="mt-6">
                  <div className='grid grid-cols-4 justify-items-end'>
                    <div >
                    
                    </div>
                    <div>
                      Pandas
                    </div>
                    <div>
                      Numpy
                    </div>
                    <div>
                      SciKit-learn
                    </div>
                </div>
              
                </div>
              </div>
             
              
              <a href='#' className="flex flex-wrap justify-start">
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/01/01/28/people-2562626_960_720.jpg"
                  class="max-w-3xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl grayscale hover:grayscale-0"
                  alt=""
                />
              </a> 
            </div>
          </li>
          <li>
            <div className='project2 m-10'>
              <p className="text-xl font-bold text-lightblue flex justify-end"> Featured Project</p>
              <h1 className="text-4xl font-bold hover:text-blue-300 flex justify-end">Expense Tracker</h1>
              <div class="bg-lightblue mt-10 rounded-lg p-6 float-left shadow-md w-2/5">
                <h2 class="text-lg font-medium mt-4">Card Title</h2>
                <p class="text-gray-600 mt-2">Card description or summary text</p>
                <div class="mt-6">
                <div className='githublink flex justify-start'>
                <Link to="https://github.com/suganros56">
                  <IconBrandGithub />
                </Link>
              </div>
                </div>
              </div>

              <div class="flex flex-wrap justify-end">
                <img
                  src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  class="max-w-3xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl grayscale hover:grayscale-0"
                  alt=""
                />
              </div>


              <div className='grid'></div>
              <div className='githublink '>

                <Link to="https://github.com/suganros56">
                  <IconBrandGithub />
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className='project3 m-10'>

              <p className="text-xl font-bold text-lightblue flex justify-start"> Featured Project</p>
              <h1 className="text-4xl font-bold hover:text-blue-300 flex justify-start">Haikyuu DAO</h1>
              <div class=" ml-10 mt-10 bg-lightblue float-right rounded-lg p-6 shadow-md w-2/5">
                <h2 class="text-lg font-medium mt-4">Card Title</h2>
                <p class="text-gray-600 mt-2">Card description or summary text</p>
                <div class="mt-6">
                  <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>


              <div class="flex flex-wrap justify-start">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_960_720.jpg"
                  class="max-w-3xl h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl grayscale hover:grayscale-0"
                  alt=""
                />
              </div>


              <div className='grid'></div>
              <div className='githublink'>

                <Link to="https://github.com/suganros56">
                  <IconBrandGithub />
                </Link>
              </div>
            </div>
          </li>
        </ul>






      </div>



    </Homelayout></div>
  )
}
export const Head = () => <Seo title="Work Page" />
export default work