import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaShareAlt, FaUserEdit, FaInfoCircle, FaUsers, FaCalculator, FaBook, FaList, FaEnvelope } from "react-icons/fa";

const cards = [
  { title: "Share Your Article", icon: <FaShareAlt size={48} className="text-teal-600" /> },
  { title: "Support For Journal Editors", icon: <FaUserEdit size={48} className="text-teal-600" /> },
  { title: "Information For Prospective Journals", icon: <FaInfoCircle size={48} className="text-teal-600" /> },
  { title: "Societies", icon: <FaUsers size={48} className="text-teal-600" /> },
  { title: "Mathematics at DUP", icon: <FaCalculator size={48} className="text-teal-600" /> },
  { title: "New Journals", icon: <FaBook size={48} className="text-teal-600" /> },
  { title: "Journal List", icon: <FaList size={48} className="text-teal-600" /> },
  { title: "Contact Journal Liaison", icon: <FaEnvelope size={48} className="text-teal-600" /> },
];

const BookAuthor = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 font-sans text-gray-900" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
        <div className="text-sm text-gray-500 mb-6">Home / Journal Authors</div>

        <header className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-teal-50 p-8 rounded-xl shadow-lg">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-teal-800">
              Information for Journal Authors and Editors
            </h1>
            <p className="text-base text-gray-600">Resource center for journal authors and editors.</p>
          </div>

          <div className="w-full md:w-80 h-36 md:h-40 overflow-hidden rounded-xl bg-teal-100 flex items-center justify-center">
            <FaBook size={64} className="text-teal-600" />
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          <aside className="space-y-4">
            <h3 className="text-xs tracking-widest font-semibold text-teal-700">IN THIS SECTION</h3>
            <ul className="space-y-3">
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Submission Guidelines
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Ethics and Policies for Journals
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Permissions Information for Journal Authors
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Share Your Article
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Support For Journal Editors
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Author Resources from University Presses
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Journal Community Websites
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                FAQ
              </li>
              <li className="text-teal-600 hover:border-b-2 border-amber-500 cursor-pointer transition-all">
                Conferences
              </li>
            </ul>
          </aside>

          <section>
            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card, i) => (
                <article
                  key={i}
                  className="bg-white border border-gray-200 p-6 text-center rounded-xl shadow-lg hover:shadow-xl transition-all animate-fadeIn"
                >
                  <div className="h-40 mb-4 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div className="h-1 w-2/5 mx-auto bg-teal-600 mb-3" />
                  <h4 className="text-teal-700 font-semibold text-lg">{card.title}</h4>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />

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

export default BookAuthor;