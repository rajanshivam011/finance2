import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";

const SidebarMenu = ({ open, onClose }) => {
  const nav = useNavigate();
  const [booksOpen, setBooksOpen] = useState(false);
  const [journalsOpen, setJournalsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-teal-800 text-white z-50 transition-transform duration-300 ease-in-out shadow-xl border-r border-teal-900 rounded-r-xl ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-teal-700 bg-teal-900 rounded-t-xl">
        <img src="/Logo-1.svg" alt="Duke University Press" className="h-10 bg-white p-2 rounded-md" />
        <button 
          onClick={onClose} 
          className="text-2xl text-white hover:text-amber-500 transition-transform hover:scale-110"
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
      </div>

      <div className="px-6 py-8 space-y-6">
        <div className="font-bold text-xl text-amber-500">Explore Subjects</div>
        <div className="space-y-4">
          {/* Books */}
          <div
            className="flex items-center justify-between cursor-pointer hover:text-amber-500 transition-colors"
            onClick={() => setBooksOpen(!booksOpen)}
          >
            <span className="font-semibold text-base">Books</span>
            <span className={`transition-transform ${booksOpen ? 'rotate-180' : ''} text-amber-500`}>&#9662;</span>
          </div>
          {booksOpen && (
            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/book')}>
                Books
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/advance_search')}>
                Books by Subject
              </div>
            </div>
          )}

          {/* Journals */}
          <div
            className="flex items-center justify-between cursor-pointer hover:text-amber-500 transition-colors"
            onClick={() => setJournalsOpen(!journalsOpen)}
          >
            <span className="font-semibold text-base">Journals</span>
            <span className={`transition-transform ${journalsOpen ? 'rotate-180' : ''} text-amber-500`}>&#9662;</span>
          </div>
          {journalsOpen && (
            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/book')}>
                Journals
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/advance_search')}>
                Browse by Title
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/advance_search')}>
                Browse by Subject
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/readinglist')}>
                Reading Lists
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/register')}>
                Sign up for Issue Alerts
              </div>
            </div>
          )}

          {/* About */}
          <div className="cursor-pointer hover:text-amber-500 transition-colors py-2 font-semibold text-base" onClick={() => nav("/about")}>
            About
          </div>

          {/* Information For */}
          <div
            className="flex items-center justify-between cursor-pointer hover:text-amber-500 transition-colors"
            onClick={() => setInfoOpen(!infoOpen)}
          >
            <span className="font-semibold text-base">Information for</span>
            <span className={`transition-transform ${infoOpen ? 'rotate-180' : ''} text-amber-500`}>&#9662;</span>
          </div>
          {infoOpen && (
            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/advertising')}>
                Advertisers
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/bookauthor')}>
                Book Authors
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/content')}>
                Booksellers/Media
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/content')}>
                Customers
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/content')}>
                Educators
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/bookauthor')}>
                Journal Authors/Editors
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/library')}>
                Librarians
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/pj')}>
                Prospective Journals
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/license')}>
                Licensing and Subsidiary Rights
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm" onClick={() => nav('/society')}>
                Societies
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [submission, setSubmission] = useState(false);
  const [aboutcontent, setAboutcontent] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openuser, setOpenuser] = useState(false);

  const nav = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Navbar */}
      <nav className="bg-white shadow-lg flex items-center justify-between px-6 py-4 border-b border-gray-100" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105"
          onClick={() => setSidebarOpen(true)}
        >
          <img src="/logo.jpg" alt="Duke University Press" className="h-10 rounded-md" /> 
          <span className="text-teal-700 font-semibold text-sm">▼</span>
        </div>

        {/* Desktop Search (visible on md and up) */}
        <div className="hidden md:flex items-center space-x-4 flex-1 mx-16">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-200 rounded-lg px-4 py-2 w-72 focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
          />
          <select className="border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-teal-600 text-gray-700">
            <option>Books & Journals</option>
            <option>Journal of Health Politics, Policy and Law</option>
            <option>Other Journal</option>
          </select>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all">
            <FiSearch size={20} />
          </button>
          <Link
            to="/advance_search"
            className="text-sm text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all"
          >
            Advanced Search
          </Link>
        </div>

        {/* Mobile Search Icon */}
        <div className="flex md:hidden items-center ml-2">
          <button
            className="text-teal-700 p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setOpen(true)}
            aria-label="Open search"
          >
            <FiSearch size={24} />
          </button>
        </div>

        {/* Mobile Slide-in Search */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex">
            <div className="bg-white w-4/5 max-w-md h-full p-6 shadow-xl rounded-r-lg">
              <button
                className="text-teal-700 mb-6 hover:scale-110 transition-all"
                onClick={() => setOpen(false)}
              >
                <FiX size={28} />
              </button>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-200 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-teal-600 text-gray-700"
                />
                <select className="border border-gray-200 rounded-lg px-3 py-3 bg-gray-50 focus:ring-2 focus:ring-teal-600 text-gray-700">
                  <option>Books & Journals</option>
                  <option>Journal of Health Politics, Policy and Law</option>
                  <option>Other Journal</option>
                </select>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-teal-700 transition-all">
                  <FiSearch size={20} className="mr-2" /> Search
                </button>
                <Link
                  to="/advance_search"
                  className="text-sm text-teal-600 hover:border-b-2 border-amber-500 font-semibold text-center transition-all block"
                  onClick={() => setOpen(false)}
                >
                  Advanced Search
                </Link>
              </div>
            </div>
            <div className="flex-1" onClick={() => setOpen(false)}></div>
          </div>
        )}
        
        {/* Register / Sign In (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/register" className="text-sm text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all">
            Register
          </Link>
          <Link to="/login" className="text-sm text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all">
            Sign In
          </Link>
        </div>

        {/* Mobile User Icon */}
        <div className="relative md:hidden">
          <button
            className="text-teal-700 p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setOpenuser(!openuser)}
            aria-label="User menu"
          >
            <FaRegCircleUser size={24} />
          </button>
          {openuser && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50 animate-fadeIn">
              <Link
                to="/register"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-amber-500 transition-all"
                onClick={() => setOpenuser(false)}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                onClick={() => setOpenuser(false)}
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-teal-700 hover:scale-110 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Journal Title */}
      <div className="md:hidden bg-gradient-to-r from-teal-600 to-teal-800 text-white px-6 py-6 text-left shadow-lg">
        <h1 className="text-lg font-bold tracking-tight">
          Journal of Health Policy & Politics
        </h1>
      </div>

      {/* Second Navbar (Desktop) */}
      <nav className="hidden md:flex bg-gradient-to-r from-teal-600 to-teal-800 text-white px-10 py-6 space-x-8 items-center gap-4 shadow-lg" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
        <h1 className="text-3xl font-bold tracking-tight ml-12 text-amber-500">
          Journal of Health Policy & Politics
        </h1>
        <Link to="/" className="hover:border-b-2 border-amber-500 text-sm font-bold transition-all py-1">
          HOME
        </Link>
        <Link to="/viewallissue" className="hover:border-b-2 border-amber-500 text-sm font-semibold transition-all py-1">
          ISSUES
        </Link>
          
        {/* FEATURED */}
        <div className="relative" onClick={() => setFeatured(!featured)}>
          <button className="hover:border-b-2 border-amber-500 cursor-pointer text-sm font-semibold transition-all py-1">FEATURED ▼</button>
          {featured && (
            <div className="absolute mt-2 bg-white text-gray-700 w-56 px-4 py-3 rounded-lg shadow-xl z-50 animate-fadeIn border border-gray-100">
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm transition-all" onClick={() => nav("/ap")}>
                Advance Publications
              </div>
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm transition-all" onClick={() => nav("/covid_19")}>
                Covid 19
              </div>
            </div>
          )}
        </div>

        {/* FOR AUTHORS */}
        <div className="relative text-sm" onClick={() => setSubmission(!submission)}>
          <button className="hover:border-b-2 border-amber-500 cursor-pointer text-sm font-semibold transition-all py-1">FOR AUTHORS ▼</button>
          {submission && (
            <div className="absolute mt-2 bg-white text-gray-700 w-64 px-4 py-3 rounded-lg shadow-xl z-50 animate-fadeIn border border-gray-100">
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm" onClick={() => nav("/submission_guide")}>
                Submission Guidelines
              </div>
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm">
                Submit Article
              </div>
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm" onClick={() => nav("/ethics")}>
                Ethics and policies
              </div>
            </div>
          )}
        </div>

        <Link to="/alerts" className="hover:border-b-2 border-amber-500 text-sm font-semibold transition-all py-1">
          ALERTS
        </Link>

        {/* ABOUT */}
        <div className="relative" onClick={() => setAboutcontent(!aboutcontent)}>
          <button className="hover:border-b-2 border-amber-500 cursor-pointer text-sm font-semibold transition-all py-1">ABOUT ▼</button>
          {aboutcontent && (
            <div className="absolute mt-2 bg-white text-gray-700 w-72 px-4 py-3 rounded-lg shadow-xl z-50 animate-fadeIn border border-gray-100">
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm" onClick={() => nav("/about_journal")}>
                About Journal
              </div>
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm" onClick={() => nav("/editorial_board")}>
                Editorial Board
              </div>
              <div className="cursor-pointer hover:bg-gray-50 rounded py-2 text-sm" onClick={() => nav("/advertising")}>
                Advertising
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gradient-to-b from-teal-600 to-teal-800 text-white font-semibold px-6 py-6 space-y-6 shadow-lg">
          <Link to="/viewallissue" className="block hover:border-b-2 border-amber-500 py-2 transition-all">
            ISSUES
          </Link>

          <details className="group">
            <summary className="cursor-pointer hover:border-b-2 border-amber-500 py-2 transition-all">FEATURED</summary>
            <div className="ml-4 mt-3 space-y-3">
              <div onClick={() => nav("/ap")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Advance Publications
              </div>
              <div onClick={() => nav("/covid_19")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Covid 19
              </div>
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer hover:border-b-2 border-amber-500 py-2 transition-all">
              FOR AUTHORS
            </summary>
            <div className="ml-4 mt-3 space-y-3">
              <div onClick={() => nav("/submission_guide")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Submission Guidelines
              </div>
              <div className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">Submit Article</div>
              <div onClick={() => nav("/ethics")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Ethics and policies
              </div>
            </div>
          </details>

          <Link to="/alerts" className="block hover:border-b-2 border-amber-500 py-2 transition-all">
            ALERTS
          </Link>

          <details className="group">
            <summary className="cursor-pointer hover:border-b-2 border-amber-500 py-2 transition-all">ABOUT</summary>
            <div className="ml-4 mt-3 space-y-3">
              <div onClick={() => nav("/about_journal")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                About Journal
              </div>
              <div onClick={() => nav("/editorial_board")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Editorial Board
              </div>
              <div onClick={() => nav("/advertising")} className="cursor-pointer hover:border-b-2 border-amber-500 py-1 transition-all text-sm">
                Advertising
              </div>
            </div>
          </details>

          <div className="pt-4 border-t border-teal-700 space-y-3">
            <Link to="/register" className="block hover:border-b-2 border-amber-500 py-2 transition-all">
              Register
            </Link>
            <Link to="/login" className="block hover:border-b-2 border-amber-500 py-2 transition-all">
              Sign In
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;