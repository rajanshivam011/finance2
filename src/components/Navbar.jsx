import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SidebarMenu = ({ open, onClose }) => {
  const nav = useNavigate();
  const [booksOpen, setBooksOpen] = useState(false);
  const [journalsOpen, setJournalsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        <img src="/logo.svg" alt="Duke University Press" className="h-8" />
        <button onClick={onClose} className="text-2xl text-white">
          &#10005;
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="font-bold text-lg">Explore Subjects</div>
        <div className="space-y-4">
          {/* Books */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setBooksOpen(!booksOpen)}
          >
            <span>Books</span>
            <span>&#9662;</span>
          </div>
          {booksOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="cursor-pointer hover:underline">Books</div>
              <div className="cursor-pointer hover:underline">
                Books by Subject
              </div>
            </div>
          )}

          {/* Journals */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setJournalsOpen(!journalsOpen)}
          >
            <span>Journals</span>
            <span>&#9662;</span>
          </div>
          {journalsOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="cursor-pointer hover:underline">Journals</div>
              <div className="cursor-pointer hover:underline">
                Browse by Title
              </div>
              <div className="cursor-pointer hover:underline">
                Browse by Subject
              </div>
              <div className="cursor-pointer hover:underline">Reading Lists</div>
              <div className="cursor-pointer hover:underline">
                Sign up for Issue Alerts
              </div>
            </div>
          )}

          {/* About */}
          <div className="cursor-pointer" onClick={() => nav("/about")}>
            About
          </div>

          {/* Information For */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setInfoOpen(!infoOpen)}
          >
            <span>Information for</span>
            <span>&#9662;</span>
          </div>
          {infoOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <div className="cursor-pointer hover:underline">Advertisers</div>
              <div className="cursor-pointer hover:underline">Book Authors</div>
              <div className="cursor-pointer hover:underline">
                Booksellers/Media
              </div>
              <div className="cursor-pointer hover:underline">Customers</div>
              <div className="cursor-pointer hover:underline">Educators</div>
              <div className="cursor-pointer hover:underline">
                Journal Authors/Editors
              </div>
              <div className="cursor-pointer hover:underline">Librarians</div>
              <div className="cursor-pointer hover:underline">
                Prospective Journals
              </div>
              <div className="cursor-pointer hover:underline">
                Licensing and Subsidiary Rights
              </div>
              <div className="cursor-pointer hover:underline">Societies</div>
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
  const nav = useNavigate();

  return (
    <>
      {/* Sidebar */}
      <SidebarMenu open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top Navbar */}
      <nav className="bg-gray-100 flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <img src="/logo.svg" alt="Duke University Press" className="h-8" /> ▼
        </div>

        {/* Search (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-2 flex-1 mx-15">
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
            <span className="material-icons" style={{ fontSize: 18 }}>
              search
            </span>
          </button>
          <a href="#" className="ml-4 text-sm text-gray-700 hover:underline">
            Advanced Search
          </a>
        </div>

        {/* Register / Sign In (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/register" className="text-sm text-gray-700 hover:underline">
            Register
          </Link>
          <Link to="/login" className="text-sm text-gray-700 hover:underline">
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Second Navbar (Desktop) */}
      <nav className="hidden md:flex bg-[#503a56] text-purple-100 font-semibold px-10 py-6 space-x-8 items-center gap-5">
        <h1 className="text-2xl font-bold tracking-tight">
          Journal of Health Politics, Policy and Law
        </h1>
        <Link to="/viewallissue" className="hover:underline">
          ISSUES
        </Link>

        {/* FEATURED */}
        <div className="relative" onClick={() => setFeatured(!featured)}>
          <button className="hover:underline">FEATURED ▼</button>
          {featured && (
            <div className="absolute mt-2 bg-white text-black w-48 px-4 py-2 rounded shadow">
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/ap")}
              >
                Advance Publications
              </div>
              <div
                className="cursor-pointer hover:underline"
                onClick={() => nav("/covid_19")}
              >
                Covid 19
              </div>
            </div>
          )}
        </div>

        {/* FOR AUTHORS */}
        <div className="relative" onClick={() => setSubmission(!submission)}>
          <button className="hover:underline">FOR AUTHORS ▼</button>
          {submission && (
            <div className="absolute mt-2 bg-white text-black w-56 px-4 py-2 rounded shadow">
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/submission_guide")}
              >
                Submission Guidelines
              </div>
              <div className="cursor-pointer hover:underline mb-2">
                Submit Article
              </div>
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/ethics")}
              >
                Ethics and policies
              </div>
            </div>
          )}
        </div>

        <a href="#" className="hover:underline">
          ALERTS
        </a>

        {/* ABOUT */}
        <div className="relative" onClick={() => setAboutcontent(!aboutcontent)}>
          <button className="hover:underline">ABOUT ▼</button>
          {aboutcontent && (
            <div className="absolute mt-2 bg-white text-black w-64 px-4 py-2 rounded shadow">
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/about_journal")}
              >
                About Journal
              </div>
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/editorial_board")}
              >
                Editorial Board
              </div>
              <div
                className="cursor-pointer hover:underline mb-2"
                onClick={() => nav("/advertising")}
              >
                Advertising
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#503a56] text-purple-100 font-semibold px-6 py-4 space-y-4">
          <Link to="/viewallissue" className="block hover:underline">
            ISSUES
          </Link>

          <details>
            <summary className="cursor-pointer hover:underline">FEATURED</summary>
            <div className="ml-4 mt-2 space-y-2">
              <div
                onClick={() => nav("/ap")}
                className="cursor-pointer hover:underline"
              >
                Advance Publications
              </div>
              <div
                onClick={() => nav("/covid_19")}
                className="cursor-pointer hover:underline"
              >
                Covid 19
              </div>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer hover:underline">
              FOR AUTHORS
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <div
                onClick={() => nav("/submission_guide")}
                className="cursor-pointer hover:underline"
              >
                Submission Guidelines
              </div>
              <div className="cursor-pointer hover:underline">Submit Article</div>
              <div
                onClick={() => nav("/ethics")}
                className="cursor-pointer hover:underline"
              >
                Ethics and policies
              </div>
            </div>
          </details>

          <Link to="/alerts" className="block hover:underline">
            ALERTS
          </Link>

          <details>
            <summary className="cursor-pointer hover:underline">ABOUT</summary>
            <div className="ml-4 mt-2 space-y-2">
              <div
                onClick={() => nav("/about_journal")}
                className="cursor-pointer hover:underline"
              >
                About Journal
              </div>
              <div
                onClick={() => nav("/editorial_board")}
                className="cursor-pointer hover:underline"
              >
                Editorial Board
              </div>
              <div
                onClick={() => nav("/advertising")}
                className="cursor-pointer hover:underline"
              >
                Advertising
              </div>
            </div>
          </details>

          <div className="pt-2 border-t border-purple-300">
            <Link to="/register" className="block hover:underline">
              Register
            </Link>
            <Link to="/login" className="block hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;