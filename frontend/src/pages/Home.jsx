import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <div  className='bg-[url(https://compote.slate.com/images/900a46ee-af68-46be-b904-bf2d9c8643a9.gif?crop=1560%2C1040%2Cx0%2Cy0&width=960)] bg-cover bg-center bg-no-repeat h-screen pt-8 w-full flex justify-between flex-col  bg-red-300'>
            <img className='h-20 w-44 ml-9' src="https://saarathi.co.in/wp-content/uploads/2020/08/saarthi-logo2.png" alt="" />
            <div className='bg-white py-5 px-6'>
                <h2 className='text-2xl font-bold text-center mb-2'>Get Started with Saarthi</h2>
                <Link to={'/UserLogin'} className='flex justify-center w-full bg-black text-white py-3 rounded ' >Continue</Link>
            </div>
       </div>
    </div>
  )
}

export default Home
