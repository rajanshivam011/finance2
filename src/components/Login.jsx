import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
          <h2 className="font-bold text-xl mb-6">Client Account</h2>
          <form>
            <div className="mb-4">
              <label className="block font-bold mb-1">
                Username / Email address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
            </div>
            {/* reCAPTCHA (placeholder) */}
            <div className="mb-6">
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
            <div className="flex items-center mb-4">
              <button
                type="submit"
                className="bg-[#3a5c9d] text-white font-bold px-6 py-2 rounded mr-4"
              >
                SIGN IN
              </button>
              <Link to="/forgot-password" className="text-blue-700 underline">
                Forgot Password?
              </Link>
            </div>
            <div className="mb-4">
              <Link to="/register" className="text-blue-700 underline">
                Don't Have An Account?
              </Link>
            </div>
            <hr className="my-6" />
            <div className="font-bold mb-2">Sign in via your Institution</div>
            <Link to="/institution-login" className="text-blue-700 underline">
              Sign In
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login