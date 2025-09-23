import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Democracy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left: Article Content */}
      <div className="flex-1 px-8 py-8">
        <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
          RESEARCH ARTICLE | August 11 2025
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Democracy, Trust, and Political Orientation: Disentangling Mechanisms Shaping Individuals’ Vaccine Attitudes
          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-bold align-middle">FREE</span>
        </h1>
        <div className="text-blue-700 text-sm mb-2">
          <a href="#" className="hover:underline">Marcello Antonini; Renu Singh; Alessia Melegaro; Aleksandra Torbica; Jeremy Keith Ward; Chiara Berardi; Katie Attwell; Adrian Kellner; Eli Feiring; Terje P. Hagen; ... Show more
Mesfin Genie; Liubovė Murauskienė; Neil McGregor; Ana Rita Sequeira; Dongyue Yang; Francesco Paolucci</a>
        </div>
        <div className="text-gray-700 text-sm mb-2">
          J Health Polit Policy Law 12166725.
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
          <a className="flex items-center gap-1 px-3 py-2 bg-gray-50 border rounded text-sm font-medium hover:bg-gray-100 cursor-pointer" onClick={() => window.open("/pdf/demo.pdf", "_blank", "noopener,noreferrer")}>
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
           Context: In recent decades, many countries experienced a reduction in the quality and functioning of democratic institutions and norms, accompanied by rising social distrust and opposing political views. The decline in vaccine confidence might be linked to these trends. This study explores the political factors influencing individual attitudes towards vaccination across 22 upper-middle-income and high-income countries, examining the interaction between political orientation, trust in public health authorities, and levels of democracy.

Methods: Using the VaxPref database, encompassing demographically representative data from 50,242 respondents collected between July 2022 and June 2023, our analysis operates on three levels: pooled sample, democracy groups, and country-specific analyses.

Results: We found that higher democracy scores generally correlated with lower levels of vaccine scepticism. People at the centre and on the right of the political spectrum expressed more scepticism towards vaccines overall. However, trust in public health authorities emerged as the determinant which explains the largest variation in vaccine attitudes.

Conclusions: Our findings suggest a greater effectiveness of democratic systems in fostering vaccine confidence, and the need to depoliticise vaccination efforts. Building and maintaining trust in scientific information and technical expertise is critical. Blunt measures like vaccination mandates may not sustain long-term confidence, particularly in democratic contexts. Effective interventions should prioritise comprehensive school-based education to promote preventive health behaviours, coupled with trust-enhancing targeted communication strategies
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

export default Democracy;