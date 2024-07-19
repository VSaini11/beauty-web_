/* eslint-disable no-unused-vars */
import React from 'react'

function Banner() {
  return (
    <>
      <div>
        
        <div className=" relative  ">
          <img
            src="src/assets/bg-2.jpg"
            alt="Background"
            className="w-screen h-screen object-cover object-center"
          />
          <form action="https://api.web3forms.com/submit" method="POST" className="absolute  sm:inset-28 inset-12 flex flex-col items-center justify-center z-10 bg-white bg-opacity-75 rounded-lg sm:max-w-md w-3/4 h-1/2 sm:h-1/2 mx-auto">
            <input type="hidden" name="access_key" value="90df28e4-66ef-4de7-8aae-3c85b4f216b9"/>
            <h2 className="text-2xl font-bold mb-4 mt-4 text-black">Contact Us</h2>
            <input
              type="text"
              name= "first_name"
              placeholder="First Name"
              className="mb-2 sm:w-1/2 w-3/4 text-black p-2 border border-black bg-transparent rounded"
            />
            <input 
              type="text"
              name='last_name'
              placeholder='Last Name'
              className="mb-2 sm:w-1/2 w-3/4 p-2 text-black border border-black bg-transparent rounded"
            />
            <input
              type="email"
              name="your_email"
              placeholder="Your Email"
              className="mb-2 sm:w-1/2 w-3/4 p-2 text-black border border-black bg-transparent rounded"
            />
            <input
              type="tel"
              name="your_phone"
              placeholder="Your Phone"
              className="mb-2 sm:w-1/2 w-3/4 p-2 border text-black border-black bg-transparent rounded"
            />
            
            <textarea rows={4} cols={22}
              name="your_message"
              placeholder="Your Message"
              className="mb-2 sm:w-1/2 w-3/4 p-2 border text-black border-black bg-transparent rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
            <h2 className=' mt-5 mb-4 text-black'>We will get back to you soon..</h2>
          </form>
        </div>
      </div>
    </>

  )
}

export default Banner
