import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <>
    <Navbar/>
        <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Register</h1>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="mb-4 text-lg">
            Already have a Duke University Press account?{' '}
            <Link to="/login" className="text-blue-700 underline">Sign in</Link>
          </div>
        </div>
        <form className="bg-white rounded-lg shadow p-8">
          <div className="mb-6 text-red-600 font-bold text-lg">
            * = Required Field
          </div>
          {/* Email */}
          <div className="mb-6">
            <label className="block font-bold mb-1">
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
            <div className="text-sm text-gray-600 mt-1">
              Your email address will be set as your 'Username'. Use this when signing in or resetting your password.
            </div>
          </div>
          {/* Password */}
          <div className="mb-6">
            <label className="block font-bold mb-1">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block font-bold mb-1">
              Confirm Password<span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
            <button
              type="button"
              className="text-blue-700 underline mt-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              Show Password
            </button>
          </div>
          {/* DUP Customer Number */}
          <div className="mb-6">
            <label className="block font-bold mb-1">
              DUP Customer Number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <div className="mb-8">
            <div className="bg-gray-100 rounded p-4 flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>I'm not a robot</span>
              </div>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                className="h-8"
              />
            </div>
            <div className="text-xs text-gray-500 mt-1">reCAPTCHA Privacy - Terms</div>
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="bg-[#3a5c9d] text-white font-bold px-8 py-2 rounded w-full"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register