import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaCloud } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-16" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
      {/* Top purple section */}
      <div className="bg-[#6c5075] text-white px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="">
            <img src="/Logo-1.svg" alt="Journal Logo" className="border-2 border-gray-400 inline-block p-4 bg-amber-100 rounded-xl"/>
          </div>

          {/* About / Links */}
          <div className="space-y-2 text-sm">
            <Link to="/about_journal" className="block hover:underline">About Journal of Health Politics, Policy and Law</Link>
            <Link to="/editorial_board" className="block hover:underline">Editorial Board</Link>
            <Link to="#" className="block hover:underline">For Authors</Link>
            <a href="https://x.com/JHPPL" target="_blank" rel="noopener noreferrer" className="block hover:underline">Twitter</a>
          </div>

          {/* More Links */}
          <div className="space-y-2 text-sm">
            <a href="https://www.facebook.com/JournalofHealthPoliticsPolicyandLaw" target="_blank" rel="noopener noreferrer" className="block hover:underline">Facebook</a>
            <Link to="/advertising" className="block hover:underline">Advertise</Link>
            <Link to="/content" className="block hover:underline">Rights and Permissions Inquiry</Link>
          </div>

          {/* Journal title */}
          <div className="flex flex-col items-end justify-between" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
            <div className="text-right font-bold text-2xl leading-snug">
              Journal of <br />
              Health Politics, <br />
              Policy <br />
              and Law
            </div>
            <div className="w-4 h-4 bg-purple-300 rounded-sm mt-4"></div>
          </div>
        </div>

        {/* ISSN + Copyright */}
        <div className="max-w-7xl mx-auto mt-6 text-center text-xs md:text-sm">
          Online ISSN 1527-1927 &nbsp; | &nbsp; Print ISSN 0361-6878 &nbsp; | &nbsp; Copyright © 2025 Duke University Press
        </div>
      </div>

      {/* Bottom black section */}
      <div className="bg-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Address & Contact */}
          <div>
            <h3 className="font-bold mb-2">Duke University Press</h3>
            <p>905 W. Main St. Ste. 18-B<br />Durham, NC 27701<br />USA</p>
            <p className="mt-4 font-bold">Phone</p>
            <p>(888) 651-0122</p>
            <p className="mt-4 font-bold">International</p>
            <p>+1 (919) 688-5134</p>
            <p className="mt-4 font-bold">Contact</p>
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
            <a href="https://www.dukeupress.edu/Careers/" className="block mb-4 hover:underline">View Open Positions</a>
            <a
              href="https://signup.e2ma.net/signup/2001912/21407/"
              className="bg-[#a07bb7] text-white px-6 py-2 rounded w-full flex items-center justify-center mb-4"
            >
              📧 Join Our Mailing List
            </a>
            <a
              href="https://www.dukeupress.edu/Catalog/"
              className="bg-[#a07bb7] text-white px-6 py-2 rounded w-full flex items-center justify-center"
            >
              📄 Current Catalog
            </a>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-2">Connect</h3>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/DukeUniversityPress" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://bsky.app/profile/dukepress.bsky.social" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
                <FaCloud className="text-xl" />
              </a>
              <a href="https://x.com/DUKEpress" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.youtube.com/user/DukeUPressPublicity" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
                <FaYoutube className="text-xl" />
              </a>
              <a href="https://www.instagram.com/dukeuniversitypress/" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2025 Duke University Press. All Rights Reserved.</span>
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
