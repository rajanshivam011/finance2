import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaGlobe, FaEnvelope, FaPen, FaNewspaper } from "react-icons/fa";

const MainContent = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-b from-teal-100 to-gray-200 min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-12 relative">
            {/* Journal Icon */}
            <div className="flex-shrink-0 z-10 flex justify-center md:justify-start">
              <div 
                className="w-28 h-28 md:w-36 md:h-36 bg-teal-100 rounded-xl shadow-lg flex items-center justify-center transition-transform hover:scale-105"
                aria-label="Global Policy Review Icon"
              >
                <FaBook className="text-7xl md:text-9xl text-teal-600" />
              </div>
            </div>

            {/* Issue Info */}
            <div className="flex-1 z-10 text-left mt-12">
              <div className="mt-6 justify-start">
                <div className="font-semibold text-2xl text-teal-700 mb-4">Latest Issue</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-800 mb-8 tracking-tight">
                  Volume 12, Issue 3, November 2025
                </div>
                <button
                  className="bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
                  onClick={() => nav("/issues")}
                  aria-label="View latest issue"
                >
                  EXPLORE THIS ISSUE
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="relative mt-16 md:ml-36">
            <div 
              className="bg-white rounded-xl flex flex-col md:flex-row gap-8 items-start p-8 max-w-full mx-auto md:-mt-28 md:ml-36 shadow-xl z-20 border border-gray-100 animate-fadeIn"
              style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}
            >
              <div className="flex-1 md:ml-16">
                <div className="font-bold text-2xl sm:text-3xl mb-4 text-teal-700 ml-8">
                  About Journal
                </div>
                <div className="text-gray-700 mb-4 text-base sm:text-lg">
                  <span className="italic"></span>A leading journal in its field, and the primary source of communication across the many disciplines it serves, the Journal of Health Politics, Policy and Law focuses on the initiation, formulation, and implementation of health policy and analyzes the relations between government and health—past, present, and future.{" "}
                  <Link
                    to="/about_journal"
                    className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all"
                  >
                    Learn more.
                  </Link>
                </div>
                <div>
                  {/* <Link 
                    to="/climate_policy" 
                    target="_blank"
                    className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all text-base sm:text-lg"
                  >
                    Explore our research on climate policy and sustainability.
                  </Link> */}
                </div>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 min-w-[200px] text-center shadow-sm border border-gray-100">
                <div className="font-bold text-xl sm:text-2xl mb-2 text-teal-700">Editor</div>
                <div className="text-gray-700 text-lg sm:text-xl">
                  Sarah E. Gollust
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRENDING ARTICLES / RECENT PUBLICATIONS / HIGHLY CITED / CONNECT WITH US */}
      <div 
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:mx-12 justify-around animate-fadeIn"
        style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}
      >
        {/* TRENDING ARTICLES */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-600 transition-all hover:shadow-xl hover:scale-102">
          <h2 className="font-bold text-2xl mb-4 text-teal-700">TRENDING ARTICLES</h2>
          <ul className="space-y-6 text-gray-700 text-base sm:text-lg">
            <li>
              <Link 
                to="/Vol_1/1.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
               Log Permeability And Injection Log Tool Comparison, Upper Shale Member Of Zubair Formation In X-Field As Case Study 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_1/2.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Customer Perceptions Of Ai-Driven Health Insurance Services And Their Impact On Insurance Purchase Intentions 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_1/3.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Interactions amongst macro-economic variables: New global evidences 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_1/4.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Adaptive Dynamic Collaboration Model Innovation In Multimodal Green Logistics Transportation As An Effort To Strengthen Business Sustainability Towards Indonesia Emas 2045
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_1/5.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Log Permeability And Injection Log Tool Comparison, Upper Shale Member Of Zubair Formation In X-Field As Case Study 
              </Link>
            </li>
          </ul>
        </div>

        {/* RECENT PUBLICATIONS */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-600 transition-all hover:shadow-xl hover:scale-102">
          <h2 className="font-bold text-2xl mb-4 text-teal-700">RECENT PUBLICATIONS</h2>
          <ul className="space-y-6 text-gray-700 text-base sm:text-lg">
            <li>
              <Link 
                to="/Vol_2/1.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                An Efficient Sharia Savings and Loan and Financing Cooperative Model Based on the Soft System Methodology (SSM) Approach to Improve Member Welfare 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_2/2.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Shifting the Paradigm: Enhancing Walkability to Mitigate Air Pollution in Urban India 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_2/3.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Resource-Aware Deep Learning: Neural Network Optimization for Edge Devices: A Review
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_2/4.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                The Future of Tele-Nursing: Balancing Human Touch with Artificial Intelligence 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_2/5.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                "Evaluting Physiological Adaptations and Yied Performances of Fave Leguminous Cover Crops in Semi Arid Condition of Algeria
              </Link>
            </li>
          </ul>
        </div>

        {/* HIGHLY CITED */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-600 transition-all hover:shadow-xl hover:scale-102">
          <h2 className="font-bold text-2xl mb-4 text-teal-700">HIGHLY CITED</h2>
          <ul className="space-y-6 text-gray-700 text-base sm:text-lg">
            <li>
              <Link 
                to="/Vol_3/1.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Privacy-Preserving Detection of Ghost Job Listings on Freelance Platforms Using Federated Autoencoders 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_3/2.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Prevalence Of Cervical Movement System Impairment Subgroups In Patients With Mechanical Neck Pain 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_3/3.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Evaluating The Effectiveness Of Supervisory Leadership Training Using Kirkpatrick's Model: Evidence From PPSDM Kemendagri Makassar
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_3/4.pdf"
                target="_blank" 
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Chronic Actinic Dermatitis With Eosinophilia And Elevated Total Immunoglobulin E Serum: A Case Report 
              </Link>
            </li>
            <li>
              <Link 
                to="/Vol_3/5.pdf" 
                target="_blank"
                className="hover:border-b-2 border-amber-500 transition-all"
              >
                Justice Deferred? Transgender Protections And The Bharatiya Nyaya Sanhita 
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT WITH US */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-600 transition-all hover:shadow-xl hover:scale-102 flex flex-col">
          <a href="https://bsky.app/profile/globalpolicyreview.bsky.social" target="_blank" rel="noopener noreferrer">
            <div 
              className="mb-4 w-full h-32 bg-teal-100 rounded-xl shadow-sm flex items-center justify-center transition-transform hover:scale-105"
              aria-label="Connect with Global Policy Review"
            >
              <FaGlobe className="text-7xl sm:text-9xl text-teal-600" />
            </div>
          </a>
          <p className="mb-4 text-gray-700 text-base sm:text-lg">
            Follow <span className="italic text-teal-700">Journal Policy Review</span> on social media for the latest policy insights and updates.
          </p>
          <Link 
            to="/connect" 
            className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all text-base sm:text-lg"
          >
            Connect with Jounal Policy Review on Bluesky.
          </Link>
        </div>
      </div>

      {/* Three Card Section */}
      <div className="bg-teal-50 mt-16 px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Stay Updated */}
          <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-102">
            <div 
              className="w-full h-32 bg-teal-100 rounded-t-xl flex items-center justify-center"
              aria-label="Stay Updated Icon"
            >
              <FaEnvelope className="text-7xl sm:text-9xl text-teal-600" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl mb-3 text-teal-700">Stay Updated</h3>
              <p className="text-base sm:text-lg text-gray-700">
                Sign up for <span className="italic">Global Policy Review</span>{" "}
                <a 
                  href="/alerts" 
                  className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all"
                >
                  email alerts
                </a>{" "}
                to receive updates on new issues and articles.
              </p>
            </div>
          </div>

          {/* Submit Your Work */}
          <div 
            className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-102"
            style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}
          >
            <div 
              className="w-full h-32 bg-teal-100 rounded-t-xl flex items-center justify-center"
              aria-label="Submit Your Work Icon"
            >
              <FaPen className="text-7xl sm:text-9xl text-teal-600" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl mb-3 text-teal-700">
                Submit Your Work
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                Contribute to <span className="italic">Global Policy Review</span>. Learn how to submit your research via our{" "}
                <Link
                  to="/submission_guide"
                  className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all"
                >
                  submission guidelines
                </Link>.
              </p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-102">
            <div 
              className="w-full h-32 bg-teal-100 rounded-t-xl flex items-center justify-center"
              aria-label="Subscribe Icon"
            >
              <FaNewspaper className="text-7xl sm:text-9xl text-teal-600" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl mb-3 text-teal-700">Subscribe</h3>
              <p className="text-base sm:text-lg text-gray-700">
                Access <span className="italic">Global Policy Review</span>{" "}
                <a 
                  href="/subscribe" 
                  className="text-teal-600 hover:border-b-2 border-amber-500 font-semibold transition-all"
                >
                  subscription details
                </a>{" "}
                for full journal access.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default MainContent;