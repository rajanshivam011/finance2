  import React from 'react'
import { Link } from 'react-router-dom'
import Submission_GuideLlnes from '../Pages/Submission_GuideLlnes'
import About_journal from '../Pages/About_journal'

const MainContent = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Journal Cover */}
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
              <div className="w-3 h-3 bg-purple-300 rounded-sm mt-2"></div>
            </div>
          </div>
          {/* Issue Info */}
          <div className="flex-1 z-10">
            <div className="mt-4">
              <div className="font-semibold text-lg mb-2">Current Issue</div>
              <div className="text-4xl font-light mb-6">
                Volume 50, Issue 5, October 2025
              </div>
              <button className="bg-[#3a5c9d] text-white px-6 py-2 rounded font-semibold mb-8">
                VIEW THIS ISSUE
              </button>
            </div>
          </div>
        </div>
        {/* About Section - Overlap and Shift Right */}
        <div className="relative">
          <div className="bg-gray-200 rounded-lg flex flex-col md:flex-row gap-8 items-start p-8 md:p-12 max-w-full md:max-w-[calc(100%-4rem)] mx-auto md:-mt-24 md:ml-32 shadow z-20">
            <div className="flex-1 ml-48">
              <div className="font-bold text-2xl mb-2">About the Journal</div>
              <div className="text-gray-800 mb-2">
                A leading journal in its field, and the primary source of communication
                 across the many disciplines it serves, the 
                 <span className="italic">Journal of Health Politics, Policy and Law</span> 
                 focuses on the initiation, formulation, and implementation of health policy and analyzes
                  the relations between government and health—past, present, and future. 
                  <Link to="/about_journal" className="text-blue-700 underline" element={<About_journal/>}>View more.</Link>
              </div>
              <div>
                <a href="#" className="text-blue-700 underline">
                  Read scholarship from the journal on the COVID-19 global health crisis.

                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 min-w-[220px] text-center shadow">
              <div className="font-bold text-xl mb-2">Editor</div>
              <div className="text-gray-800 text-lg">Sarah E. Gollust</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Add this below your About Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 mx-16 justify-around"> 
        {/* MOST READ */}
        <div className="bg-white rounded-lg shadow-xl p-6 border-t-8 border-[#503a56] w-72">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">MOST READ</h2>
          <ul className="space-y-3 text-gray-800">
            <li>Polarization, Partisanship, and Health in the United States</li>
            <li>What Is Wellness Now?</li>
            <li>It’s Only a Crisis if It’s Fit to Print: Examining the Relationship Between Overdose Rates, News Coverage, and the Presence of the Opioid Crisis in State Legislative Campaigns</li>
            <li>Hospital Consolidation Across Geographic Markets: Insights from Market Participants on Mechanisms for Price Increases</li>
            <li>Medicare at 60: A Popular Program Facing Challenges</li>
          </ul>
        </div>
        {/* LATEST */}
        <div className="bg-white rounded-lg shadow-2xl p-6 border-t-8 border-[#503a56] w-72">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">LATEST</h2>
          <ul className="space-y-3 text-gray-800">
            <li>Medicaid and the Great Unwinding: The Administrative Presidency Meets Federalism</li>
            <li>Hospital Consolidation Across Geographic Markets: Insights from Market Participants on Mechanisms for Price Increases</li>
            <li>Analyzing Public Support for School-Based Mental Health Services</li>
            <li>It’s Only a Crisis if It’s Fit to Print: Examining the Relationship Between Overdose Rates, News Coverage, and the Presence of the Opioid Crisis in State Legislative Campaigns</li>
            <li>Paid Leave for Personal and Family Illness: Impacts of State Policy Design on Coverage and Access by Race, Gender, and Education Level</li>
          </ul>
        </div>
        {/* MOST CITED */}
        <div className="bg-white rounded-lg shadow-2xl p-6 border-t-8 border-[#503a56] w-72">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">MOST CITED</h2>
          <ul className="space-y-3 text-gray-800">
            <li>Arrests of and Forced Interventions on Pregnant Women in the United States, 1973–2005: Implications for Women's Legal Status and Public Health</li>
            <li>Pandemic Politics: Timing State-Level Social Distancing Responses to COVID-19</li>
            <li>Weighing Both Sides: Morality, Mortality, and Framing Contests over Obesity</li>
            <li>The Biological Concept of Race and Its Application to Public Health and Epidemiology</li>
            <li>Lay Participation in Health Care Decision Making: A Conceptual Framework</li>
          </ul>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="bg-white rounded-lg shadow-2xl p-6 border-t-8 border-[#503a56] flex flex-col w-72">
          <img
            src="https://via.placeholder.com/300x80?text=Follow+this+journal+on+social+media"
            alt="Social Media"
            className="mb-4 rounded"
          />
          <p className="mb-4 text-gray-800">
            Stay connected and up to date with our latest news by following <span className="italic text-blue-700">Journal of Health Politics, Policy and Law</span> on Bluesky.
          </p>
          <div className="flex space-x-3 mb-2">
            {/* Replace with actual icons if you want */}
            <span className="text-gray-500 text-xl">🌐</span>
            <span className="text-gray-500 text-xl">📘</span>
            <span className="text-gray-500 text-xl">📺</span>
            <span className="text-gray-500 text-xl">📷</span>
            <span className="text-gray-500 text-xl">🦋</span>
          </div>
          <a href="#" className="text-blue-700 underline">
            Journal of Health Politics, Policy and Law on Bluesky.
          </a>
        </div>
      </div>
      {/* Three Card Section */}
      <div className="bg-gray-100 mt-16 px-2 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Issue Alerts */}
          <div className="flex flex-col">
            <img
              src="/card-1.jpg"
              alt="Issue Alerts"
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-xl mb-2">Issue Alerts</h3>
              <p>
                Sign up to receive <span className="italic">Journal of Health Politics, Policy and Law</span> <a href="#" className="text-blue-700 underline">table-of-contents alerts</a> when a new issue is published.
              </p>
            </div>
          </div>
          {/* Publish in this journal */}
          <div className="flex flex-col">
            <img
              src="/card-2.jpg"
              alt="Publish in this journal"
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-xl mb-2">Publish in this journal</h3>
              <p>
                For information on how to submit an article, visit our <Link to="/submission_guide" className="text-blue-700 underline" element={<Submission_GuideLlnes/>}>submission guidelines</Link>.
              </p>
            </div>
          </div>
          {/* Subscribe */}
          <div className="flex flex-col">
            <img
              src="/card-3.jpg"
              alt="Subscribe"
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-xl mb-2">Subscribe</h3>
              <p>
                <a href="#" className="text-blue-700 underline">View subscription rates and details</a> for <span className="italic">Journal of Health Politics, Policy and Law</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
  )}
export default MainContent