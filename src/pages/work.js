import React from 'react'
import Homelayout from '../components/homeLayout'
import Seo from 'my-gatsby-site/src/components/Seo.js'

function work() {
  return (
    <div><Homelayout pageTitle="Work">
      <div className='space-y-5'>
        <p className="text-2xl text-bluelight">Some Things I’ve Built</p>
        <div className='project1 m-10'>
          <p className="text-xl font-bold text-lightblue"> Featured Project</p>
          <h1 className="text-4xl font-bold hover:text-blue-300">Admit predictor</h1>
          <div class="flex flex-wrap justify-end">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/01/01/28/people-2562626_960_720.jpg"
              class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
              alt=""
            />
          </div>


          <div className='card'></div>
          <div className='grid'></div>
          <div className='githublink'></div>
        </div>

        <div className='project2 m-10'>
          <p className="text-xl font-bold text-lightblue flex justify-end"> Featured Project</p>
          <h1 className="text-4xl font-bold hover:text-blue-300 flex justify-end">Expense Tracker</h1>
          <div class="flex flex-wrap justify-start">
            <img
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
              alt=""
            />
          </div>

          <div className='card'></div>
          <div className='grid'></div>
          <div className='githublink'></div>
        </div>

        <div className='project3 m-10'>
          <p className="text-xl font-bold text-lightblue flex justify-start"> Featured Project</p>
          <h1 className="text-4xl font-bold hover:text-blue-300 flex justify-start">Haikyuu DAO</h1>
          <div class="flex flex-wrap justify-end">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_960_720.jpg"
              class="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl"
              alt=""
            />
          </div>

          <div className='card'></div>
          <div className='grid'></div>
          <div className='githublink'></div>
        </div>

      </div>



    </Homelayout></div>
  )
}
export const Head = () => <Seo title="Work" />
export default work