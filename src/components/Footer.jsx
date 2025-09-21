import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16">
      {/* Top purple section */}
      <div className="bg-[#6c5075] text-white px-8 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left links */}
          <div className="space-y-3">
            <a href="#" className="block hover:underline">About Journal of Health Politics, Policy and Law</a>
            <a href="#" className="block hover:underline">Editorial Board</a>
            <a href="#" className="block hover:underline">For Authors</a>
            <a href="#" className="block hover:underline">Twitter</a>
          </div>
          {/* Center links */}
          <div className="space-y-3">
            <a href="#" className="block hover:underline">Facebook</a>
            <a href="#" className="block hover:underline">Purchase</a>
            <a href="#" className="block hover:underline">Advertise</a>
            <a href="#" className="block hover:underline">Rights and Permissions Inquiry</a>
          </div>
          {/* Journal title */}
          <div className="flex flex-col items-end justify-between h-full">
            <div className="text-right font-bold text-2xl leading-tight mb-2">
              Journal of<br />
              Health Politics,<br />
              Policy<br />
              and Law
            </div>
            <div className="w-4 h-4 bg-purple-300 rounded-sm mt-2"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 text-center text-sm">
          Online ISSN 1527-1927 &nbsp; | &nbsp; Print ISSN 0361-6878 &nbsp; | &nbsp; Copyright © 2025 Duke University Press
        </div>
      </div>
      {/* Bottom black section */}
      <div className="bg-black text-white px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address & Contact */}
          <div>
            <div className="font-bold mb-2">Duke University Press</div>
            <div>905 W. Main St. Ste. 18-B<br />Durham, NC 27701<br />USA</div>
            <div className="mt-4 font-bold">Phone</div>
            <div>(888) 651-0122</div>
            <div className="mt-4 font-bold">International</div>
            <div>+1 (919) 688-5134</div>
            <div className="mt-4 font-bold">Contact</div>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          {/* Information For */}
          <div>
            <div className="font-bold mb-2">Information For</div>
            <div className="space-y-1">
              <a href="#" className="block hover:underline">Advertisers</a>
              <a href="#" className="block hover:underline">Book Authors</a>
              <a href="#" className="block hover:underline">Booksellers/Media</a>
              <a href="#" className="block hover:underline">Customers</a>
              <a href="#" className="block hover:underline">Educators</a>
              <a href="#" className="block hover:underline">Journal Authors/Editors</a>
              <a href="#" className="block hover:underline">Librarians</a>
              <a href="#" className="block hover:underline">Prospective Journals</a>
              <a href="#" className="block hover:underline">Licensing and Subsidiary Rights</a>
              <a href="#" className="block hover:underline">Societies</a>
            </div>
          </div>
          {/* Careers & Mailing List */}
          <div>
            <div className="font-bold mb-2">Careers</div>
            <a href="#" className="block mb-4 hover:underline">View Open Positions</a>
            <button className="bg-[#a07bb7] text-white px-6 py-2 rounded w-full flex items-center justify-center mb-4">
              <span className="mr-2">📧</span> Join Our Mailing List
            </button>
            <button className="bg-[#a07bb7] text-white px-6 py-2 rounded w-full flex items-center justify-center">
              <span className="mr-2">📄</span> Current Catalog
            </button>
          </div>
          {/* Connect & Logo */}
          <div>
            <div className="font-bold mb-2">Connect</div>
            <div className="flex space-x-2 mb-4">
              <a href="#" className="bg-black border border-white rounded p-2 flex items-center justify-center">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="bg-black border border-white rounded p-2 flex items-center justify-center">
                <span className="text-xl">🦋</span>
              </a>
              <a href="#" className="bg-black border border-white rounded p-2 flex items-center justify-center">
                <span className="text-xl">✖️</span>
              </a>
              <a href="#" className="bg-black border border-white rounded p-2 flex items-center justify-center">
                <span className="text-xl">📺</span>
              </a>
              <a href="#" className="bg-black border border-white rounded p-2 flex items-center justify-center">
                <span className="text-xl">📷</span>
              </a>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Duke_University_Press_logo.png"
              alt="Duke University Press"
              className="mt-4 w-48"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 text-xs text-gray-300 flex flex-wrap justify-between items-center">
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