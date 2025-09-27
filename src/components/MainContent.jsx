import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Submission_GuideLlnes from "../Pages/Submission_GuideLlnes";
import About_journal from "../Pages/About_journal";

const MainContent = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-8 relative">
            {/* Journal Cover */}
            <div className="flex-shrink-0 z-10 flex justify-center md:justify-start">
              <div className="w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px] bg-gradient-to-b from-[#503a56] to-purple-200 rounded-lg flex flex-col justify-center items-center text-white font-bold text-lg sm:text-xl p-4 sm:p-6">
                <div className="mt-10 mb-24 sm:mb-32 text-center leading-tight">
                  Journal of <br />
                  Health Politics, <br />
                  Policy <br />
                  and Law
                </div>
                <div className="text-purple-200 text-xs mt-auto mb-6 text-left w-full pl-2">
                  Volume 50 <br />
                  Number 5 <br />
                  October 2025
                </div>
                <div className="w-3 h-3 bg-purple-300 rounded-sm mt-2"></div>
              </div>
            </div>

            {/* Issue Info */}
            <div className="flex-1 z-10 text-center md:text-left">
              <div className="mt-4">
                <div className="font-semibold text-lg mb-2">Current Issue</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-light mb-6">
                  Volume 50, Issue 5, October 2025
                </div>
                <button
                  className="bg-[#3a5c9d] hover:bg-[#2d477a] text-white px-6 py-2 rounded font-semibold mb-8 cursor-pointer "
                  onClick={() => {
                    nav("/viewallissue");
                  }}
                >
                  VIEW THIS ISSUE
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
     <div className="relative mt-2 md:ml-32">
            <div className="bg-gray-200 rounded-lg flex flex-col md:flex-row gap-8 items-start p-6 sm:p-8 md:p-12 max-w-full mx-auto md:-mt-24 md:ml-20 shadow z-20" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
              <div className="flex-1 md:ml-20">
                <div className="font-bold text-xl sm:text-2xl mb-2">
                  About the Journal
                </div>
                <div className="text-gray-800 mb-2 text-sm sm:text-base" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
                  A leading journal in its field, and the primary source of
                  communication across the many disciplines it serves, the{" "}
                  <span className="italic">
                    Journal of Health Politics, Policy and Law
                  </span>{" "}
                  focuses on the initiation, formulation, and implementation of
                  health policy and analyzes the relations between government
                  and health—past, present, and future.{" "}
                  <Link
                    to="/about_journal"
                    className="text-blue-700 underline"
                    element={<About_journal />}
                  >
                    View more.
                  </Link>
                </div>
                <div>
                  <Link to="/covid_19" className="text-blue-700 underline">
                    Read scholarship from the journal on the COVID-19 global
                    health crisis.
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 sm:p-8 min-w-[180px] sm:min-w-[220px] text-center shadow">
                <div className="font-bold text-lg sm:text-xl mb-2">Editor</div>
                <div className="text-gray-800 text-base sm:text-lg">
                  Sarah E. Gollust
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOST READ / LATEST / MOST CITED / SOCIAL MEDIA */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:mx-16 justify-around" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
        {/* MOST READ */}
        <div className="bg-white rounded-lg shadow-xl p-6 border-t-8 border-[#503a56]">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">MOST READ</h2>
          <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <Link to="/polar" className="hover:underline">
                Polarization, Partisanship, and Health in the United States
              </Link>
            </li>
            <li>
              <Link to="/wellness" className="hover:underline">What Is Wellness Now?</Link>
            </li>
            <li>
              <Link to="/crisis" className="hover:underline">
                It’s Only a Crisis if It’s Fit to Print: Examining the
                Relationship Between Overdose Rates, News Coverage, and the
                Presence of the Opioid Crisis in State Legislative Campaigns
              </Link>
            </li>
            <li>
              <Link to="/hos_con" className="hover:underline">
                Hospital Consolidation Across Geographic Markets: Insights from
                Market Participants on Mechanisms for Price Increases
              </Link>
            </li>
            <li>
              <Link to="/mediaid" className="hover:underline">
                Medicare at 60: A Popular Program Facing Challenges
              </Link>
            </li>
          </ul>
        </div>

        {/* LATEST */}
        <div className="bg-white rounded-lg shadow-xl p-6 border-t-8 border-[#503a56]">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">LATEST</h2>
          <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <Link to="/mediaid" className="hover:underline">
                Medicaid and the Great Unwinding: The Administrative Presidency
                Meets Federalism
              </Link>
            </li>
            <li>
              <Link to="/hos_con" className="hover:underline">
                Hospital Consolidation Across Geographic Markets: Insights from
                Market Participants on Mechanisms for Price Increases
              </Link>
            </li>
            <li>
              <Link to="/public_support" className="hover:underline">
                Analyzing Public Support for School-Based Mental Health Services
              </Link>
            </li>
            <li>
              <Link to="/crisis" className="hover:underline">
                It’s Only a Crisis if It’s Fit to Print: Examining the
                Relationship Between Overdose Rates, News Coverage, and the
                Presence of the Opioid Crisis in State Legislative Campaigns
              </Link>
            </li>
            <li>
              <Link to="/paid_leave" className="hover:underline">
                Paid Leave for Personal and Family Illness: Impacts of State
                Policy Design on Coverage and Access by Race, Gender, and
                Education Level
              </Link>
            </li>
          </ul>
        </div>

        {/* MOST CITED */}
        <div className="bg-white rounded-lg shadow-xl p-6 border-t-8 border-[#503a56]">
          <h2 className="font-bold text-xl mb-4 text-[#503a56]">MOST CITED</h2>
          <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
            <li>
              <Link className="hover:underline">
                Arrests of and Forced Interventions on Pregnant Women in the
                United States, 1973–2005
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Pandemic Politics: Timing State-Level Social Distancing
                Responses to COVID-19
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Weighing Both Sides: Morality, Mortality, and Framing Contests
                over Obesity
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                The Biological Concept of Race and Its Application to Public
                Health and Epidemiology
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                Lay Participation in Health Care Decision Making: A Conceptual
                Framework
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="bg-white rounded-lg shadow-xl p-6 border-t-8 border-[#503a56] flex flex-col">
          <a href="https://bsky.app/profile/dukepress.bsky.social" target="_blank">
          <img
            src="/Social_media.png"
            alt="Social Media"
            className="mb-4 rounded"
          /></a>
          <p className="mb-4 text-gray-800 text-sm sm:text-base">
            Stay connected and up to date with our latest news by following{" "}
            <span className="italic text-blue-700">
              Journal of Health Politics, Policy and Law
            </span>{" "}
            on Bluesky.
          </p>
          {/* <div className="flex space-x-3 mb-2">
            <span className="text-gray-500 text-xl">🌐</span>
            <span className="text-gray-500 text-xl">📘</span>
            <span className="text-gray-500 text-xl">📺</span>
            <span className="text-gray-500 text-xl">📷</span>
            <span className="text-gray-500 text-xl">🦋</span>
          </div> */}
          <Link to="/" className="text-blue-700 underline text-sm sm:text-base">
            Journal of Health Politics, Policy and Law on Bluesky.
          </Link>
        </div>
      </div>

      {/* Three Card Section */}
      <div className="bg-gray-100 mt-16 px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Issue Alerts */}
          <div className="flex flex-col">
            <img
              src="/card-1.jpg"
              alt="Issue Alerts"
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Issue Alerts</h3>
              <p className="text-sm sm:text-base">
                Sign up to receive{" "}
                <span className="italic">
                  Journal of Health Politics, Policy and Law
                </span>{" "}
                <a href="#" className="text-blue-700 underline">
                  table-of-contents alerts
                </a>{" "}
                when a new issue is published.
              </p>
            </div>
          </div>

          {/* Publish in this journal */}
          <div className="flex flex-col" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>
            <img
              src="/card-2.jpg"
              alt="Publish in this journal"
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-lg sm:text-xl mb-2">
                Publish in this journal
              </h3>
              <p className="text-sm sm:text-base">
                For information on how to submit an article, visit our{" "}
                <Link
                  to="/submission_guide"
                  className="text-blue-700 underline"
                  element={<Submission_GuideLlnes />}
                >
                  submission guidelines
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col">
            <img
              src="/card-3.jpg"
              alt="Subscribe"
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Subscribe</h3>
              <p className="text-sm sm:text-base">
                <a href="#" className="text-blue-700 underline">
                  View subscription rates and details
                </a>{" "}
                for{" "}
                <span className="italic">
                  Journal of Health Politics, Policy and Law
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
