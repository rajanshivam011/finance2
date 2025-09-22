import React from 'react'

const Mediaid = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left: Article Content */}
      <div className="flex-1 px-8 py-8">
        <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
          RESEARCH ARTICLE | JUNE 01 2024
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Medicaid and the Great Unwinding: The Administrative Presidency Meets Federalism 
          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-bold align-middle">FREE</span>
        </h1>
        <div className="text-blue-700 text-sm mb-2">
          <a href="#" className="hover:underline">Michael K. Gusmano; Frank J. Thompson</a>
        </div>
        <div className="text-gray-700 text-sm mb-2">
          J Health Polit Policy Law (2025) 50 (5): 801–830.
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
           In the context of America's fragmented health insurance system, federal policy makers frequently turn to Medicaid to temporarily assist the blameless victims of societal crises. In this vein, the COVID pandemic triggered passage of major legislation that led Medicaid enrollments to soar. The end of the public health emergency presented the Biden administration and state Medicaid programs with the daunting task of implementing the “great unwinding”—redetermining eligibility for millions of enrollees. This article describes the core strategies the Biden administration employed to induce state implementing agents to minimize inappropriate Medicaid disenrollments during the unwinding. Preliminary data suggest great variation in state responses to the Biden strategic initiatives. On balance, however, the Biden administrative presidency appears to have made headway in nudging states toward more take-up–friendly renewal processes. The article also discusses the implications of the great unwinding for more general efforts to enhance Medicaid participation rates.
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
  )
}

export default Mediaid