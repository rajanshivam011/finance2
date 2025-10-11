import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaCloud, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-16" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
      {/* Top teal section */}
      <div className="bg-teal-800 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="">
            <img src="/logo.jpg" alt="Journal Logo" className="border-gray-300 inline-block p-4 rounded-xl"/>
          </div>

          {/* About / Links */}
          <div className="space-y-2 text-sm">
            <Link to="/about_policy_review" className="block hover:underline">About Journal Policy Review</Link>
            <Link to="/editorial_board" className="block hover:underline">Editorial Board</Link>
            <Link to="/submission_guide" className="block hover:underline">For Authors</Link>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block hover:underline">Bluesky</a>
          </div>

          {/* More Links */}
          <div className="space-y-2 text-sm">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block hover:underline">Facebook</a>
            <Link to="/advertising" className="block hover:underline">Advertise</Link>
            <Link to="/content" className="block hover:underline">Rights and Permissions Inquiry</Link>
          </div>

          {/* Journal title */}
          <div className="flex flex-col items-end justify-between" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
            <div className="text-right font-bold text-2xl leading-snug">
              Journal <br />
              Policy <br />
              Review
            </div>
            <div className="w-4 h-4 bg-teal-300 rounded-sm mt-4"></div>
          </div>
        </div>

        {/* ISSN + Copyright */}
        <div className="max-w-7xl mx-auto mt-6 text-center text-xs md:text-sm">
          Online ISSN 1527-1927 &nbsp; | &nbsp; Print ISSN 0361-6878 &nbsp; 
          {/* | &nbsp; Copyright © 2025 Global Policy Review */}
        </div>
      </div>

      {/* Bottom dark section */}
      <div className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Address & Contact */}
          <div>
            <h3 className="font-bold mb-2">Applied Journal Health Politics</h3>
            <p><FaPhone/></p>
            <Link to="/contact_us" className="hover:underline">Contact Us</Link>
          </div>

          {/* Information For */}
          <div>
            <h3 className="font-bold mb-2">Information For</h3>
            <div className="space-y-1">
              <Link to="/advertising" className="block hover:underline">Advertisers</Link>
              <Link to="/bookauthor" className="block hover:underline">Book Authors</Link>
              <Link to="/content" className="block hover:underline">Booksellers/Media</Link>
              <Link to="/content" className="block hover:underline">Customers</Link>
              <Link to="/content" className="block hover:underline">Educators</Link>
              <Link to="/bookauthor" className="block hover:underline">Journal Authors/Editors</Link>
              <Link to="/library" className="block hover:underline">Librarians</Link>
              <Link to="/pj" className="block hover:underline">Prospective Journals</Link>
              <Link to="/license" className="block hover:underline">Licensing and Subsidiary Rights</Link>
              <Link to="/society" className="block hover:underline">Societies</Link>
            </div>
          </div>

          {/* Careers & Mailing List */}
          <div>
            <h3 className="font-bold mb-2">Careers</h3>
            <a href="#" className="block mb-4 hover:underline">View Open Positions</a>
            <a
              href="#"
              className="bg-teal-600 text-white px-6 py-2 rounded w-full flex items-center justify-center mb-4 hover:bg-teal-700 transition-all"
            >
              📧 Join Our Mailing List
            </a>
            <a
              href="#"
              className="bg-teal-600 text-white px-6 py-2 rounded w-full flex items-center justify-center hover:bg-teal-700 transition-all"
            >
              📄 Current Catalog
            </a>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <div className="flex space-x-2">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded hover:border-amber-500 transition-all">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded hover:border-amber-500 transition-all">
                <FaCloud className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded hover:border-amber-500 transition-all">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded hover:border-amber-500 transition-all">
                <FaYoutube className="text-xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded hover:border-amber-500 transition-all">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <span>© 2025 Global Policy Review. All Rights Reserved.</span> */}
          <div className="space-x-4">
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Get Adobe Reader</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer