import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const WellNess = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left: Article Content */}
      <div className="flex-1 px-8 py-8">
        <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
        Introduction| October 01 2014
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
         What Is Wellness Now?
          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-bold align-middle">FREE</span>
        </h1>
        <div className="text-blue-700 text-sm mb-2">
          <a href="#" className="hover:underline">Anna Kirkland</a>
        </div>
        <div className="text-gray-700 text-sm mb-2">
          J Health Polit Policy Law (2014) 39 (5): 957–970.
        </div>
        <a
          href="https://doi.org/10.1215/03616878-11075609"
          className="text-blue-700 text-sm underline mb-4 block"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://doi.org/10.1215/03616878-11075609
        </a>

        {/* Action Bar */}
        <div className="flex gap-2 mb-6">
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 border rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
            {/* Icon: Standard View */}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><rect x="3" y="5" width="12" height="8" rx="2" /></svg>
            Standard View
          </button>
          <a className="flex items-center gap-1 px-3 py-2 bg-gray-50 border rounded text-sm font-medium hover:bg-gray-100 cursor-pointer" href="/pdf/polar.pdf" target="_blank" rel="noopener noreferrer">
            {/* Icon: PDF */}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><rect x="4" y="3" width="10" height="12" rx="2" /><line x1="8" y1="7" x2="10" y2="7" /></svg>
            PDF
          </a>
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 border rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
            {/* Icon: Share */}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="5" cy="9" r="2" /><circle cx="13" cy="5" r="2" /><circle cx="13" cy="13" r="2" /><line x1="7" y1="9" x2="11" y2="5" /><line x1="11" y1="13" x2="7" y2="9" /></svg>
            Share
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><polyline points="3 5 6 8 9 5" /></svg>
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-gray-50 border rounded text-sm font-medium hover:bg-gray-100 cursor-pointer">
            {/* Icon: Tools */}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="9" cy="9" r="7" /><line x1="9" y1="2" x2="9" y2="16" /><line x1="2" y1="9" x2="16" y2="9" /></svg>
            Tools
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><polyline points="3 5 6 8 9 5" /></svg>
          </button>
        </div>

        {/* Abstract Section */}
        <div className="bg-gray-50 border rounded p-6 mt-4">
          <div className="text-gray-800 text-base leading-relaxed">
            Wellness is a popular buzzword these days. One finds wellness programs, wellness centers, wellness contests, wellness conferences, wellness journals, wellness administrators, wellness awards, wellness tourism, and even a Wellness brand cat and dog food (complete with its own blog and website asking, “What is true wellness?”). Like “intersectionality” in feminist scholarship (Davis 2008), the rise of “diversity” over affirmative action (Kelly and Dobbin 1998; Edelman, Fuller, and Mara-Drita 2001), “sustainability” in approaches to the natural world and its use and development (Scoones 2007), and “sexual health” in place of panic over sexually transmitted infections (Epstein and Mamo 2011), the hegemony of the buzzword wellness signals its usefulness for framing consensus in contemporary American society. That consensus is that health is more than just the absence of disease, that health promotion and prevention of disease should be a top governmental and personal priority, and that each individual can and should strive to achieve a state of optimal functioning. But in typical buzzword fashion, the appeal of the term comes from its ability to float above thorny and contested details and to mean different things to different stakeholders so that it becomes viewed as an uncontroverted good.
            </div>
        </div>
      </div>

      {/* Right: Sidebar */}
     <div className="flex-shrink-0 z-10">
          <div className="w-80 h-[420px] bg-gradient-to-b from-[#503a56] to-purple-200 rounded-lg flex flex-col justify-center items-center text-white font-bold text-xl p-6">
            <div className="mt-10 mb-32 text-center leading-tight">
              Journal of<br />
              Health Politics,<br />
              Policy<br />
              and Law
            </div>
            <div className="text-purple-200 text-xs mt-auto mb-6 text-left w-full pl-2">
              Volume 50<br />
              Number 5<br />
              October 2025
            </div>
            </div>
            </div>
    </div>
    <Footer/>
    </>
  );
};

export default WellNess;