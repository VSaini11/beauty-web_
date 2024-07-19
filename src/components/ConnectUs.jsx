/* eslint-disable no-unused-vars */
import React from 'react'

function ConnectUs() {
  return (
    <>
    <div>
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex-none sm:flex gap-9 justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: dkskavita1@gmail.com</p>
            <p>Phone: +91-8795629877</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700">Whatsapp</a>
              
              <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700">Instagram</a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p>We are building brand that provides best service.
                <br /> Handled by Kavita Saini.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
    </>
    
  )
}

export default ConnectUs