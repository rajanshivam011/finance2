import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SidebarMenu = ({ open, onClose }) => {
    const nav=useNavigate();
    const [booksOpen, setBooksOpen] = useState(false);
    const [journalsOpen, setJournalsOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    return(
  <div className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-50 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
      <img
        src="/logo.svg"
        alt="Duke University Press"
        className="h-8"
      />
      <button onClick={onClose} className="text-2xl text-white">
        &#10005;
      </button>
    </div>
    <div className="px-6 py-6 space-y-6">
      <div className="font-bold text-lg">Explore Subjects</div>
      <div className="space-y-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setBooksOpen(!booksOpen)}>
          <span>Books</span>
          <span>&#9662;</span>
        </div>
        {booksOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <div className="cursor-pointer hover:underline">Books</div>
                <div className="cursor-pointer hover:underline">Books by Subject</div>
              </div>
            )}
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setJournalsOpen(!journalsOpen)}>
          <span>Journals</span>
          <span>&#9662;</span>
        </div>
        {journalsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <div className="cursor-pointer hover:underline">Journals</div>
                  <div className="cursor-pointer hover:underline">Browse by Title</div>
                  <div className="cursor-pointer hover:underline">Browse by Subject</div>
                  <div className="cursor-pointer hover:underline">Reading Lists</div>
                  <div className="cursor-pointer hover:underline">Sign up for Issue Alerts</div>
                </div>
              )}
        <div className="cursor-pointer" onClick={()=>{nav('/about')}}>About</div>
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setInfoOpen(!infoOpen)}>
          <span>Information for</span>
          <span>&#9662;</span>
        </div>
        {infoOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="cursor-pointer hover:underline">Advertisers</div>
              <div className="cursor-pointer hover:underline">Book Authors</div>
              <div className="cursor-pointer hover:underline">Booksellers/Media</div>
              <div className="cursor-pointer hover:underline">Customers</div>
              <div className="cursor-pointer hover:underline">Educators</div>
              <div className="cursor-pointer hover:underline">Journal Authors/Editors</div>
              <div className="cursor-pointer hover:underline">Librarians</div>
              <div className="cursor-pointer hover:underline">Prospective Journals</div>
              <div className="cursor-pointer hover:underline">Licensing and Subsidiary Rights</div>
              <div className="cursor-pointer hover:underline">Societies</div>
            </div>
          )}
      </div>
    </div>
  </div>
    );
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [featured,setfeatured]=useState(false);
  const [submission,setsubmission]=useState(false);
  const [aboutcontent,setaboutcontent]=useState(false);
    const nav=useNavigate();
  return (
    <>
      {/* Sidebar */}
      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Navbar */}
      <nav className="bg-gray-100 flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <img
            src="/logo.svg"
            alt="Duke University Press"
            className="h-8"
          />
          ▼
        </div>
        {/* Search & Journal Select */}
        <div className="flex items-center space-x-2 flex-1 mx-15">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-1 w-64"
          />
          <select className="border border-gray-300 rounded px-2 py-1 bg-gray-50">
            <option>Books & Journals</option>
            <option>Journal of Health Politics, Policy and Law</option>
            <option>Other Journal</option>
          </select>
          <button className="bg-blue-400 text-white px-3 py-1 rounded ml-2">
            <span className="material-icons" style={{ fontSize: 18 }}>search</span>
          </button>
          <a href="#" className="ml-4 text-sm text-gray-700 hover:underline">Advanced Search</a>
        </div>
        {/* Register / Sign In */}
        <div className="flex items-center space-x-4" >
          <Link to="/register" className="text-sm text-gray-700 hover:underline" >Register</Link>
          <Link to="/login" className="text-sm text-gray-700 hover:underline" >Sign In</Link>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-[#503a56] text-purple-100 font-semibold px-10 py-10 flex items-center space-x-8 ">
        <h1 className="text-4xl font-bold tracking-tight mr-8 ml-5">
          Journal of Health Politics, Policy and Law
        </h1>
        <a href="#" className="hover:underline">ISSUES</a>
        <div className="relative group" onClick={() => setfeatured(!featured)}>
          <button className="hover:underline cursor-pointer">FEATURED ▼</button>
          {featured && (
            <div className="absolute mt-5 bg-white text-black w-48 px-4">
              <div className="cursor-pointer hover:underline mb-2">Advance Publications</div>
              <div className="cursor-pointer hover:underline">Covid 19</div>
            </div>
          )}
        </div>
        <div className="relative group cursor-pointer" onClick={() => setsubmission(!submission)}>
          <button className="hover:underline cursor-pointer">FOR AUTHORS ▼</button>
          {submission && (
            <div className="absolute mt-5 bg-white text-black w-54 px-4">
              <div className="cursor-pointer hover:underline mb-2">Submission Guidelines</div>
              <div className="cursor-pointer hover:underline mb-2">Submit Article</div>
              <div className="cursor-pointer hover:underline mb-2">Ethics and policies</div>
            </div>
          )}
        </div>
        <a href="#" className="hover:underline">ALERTS</a>
        {/* <a href="#" className="hover:underline">PURCHASE</a> */}
        <div className="relative group">
          <button className="hover:underline cursor-pointer" onClick={()=>{setaboutcontent(!aboutcontent)}}>ABOUT ▼</button>
          {aboutcontent && (
            <div className="absolute mt-5 bg-white text-black w-54 px-4">
              <div className="cursor-pointer hover:underline mb-2" onClick={()=>{nav('/about_journal')}}>About Journal of Health Politics, Policy and Law</div>
              <div className="cursor-pointer hover:underline mb-2">Editorial Board</div>
              <div className="cursor-pointer hover:underline mb-2">Advertising</div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar