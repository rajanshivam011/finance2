// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBook,
  FaCalculator,
  FaTools,
  FaChartBar,
  FaUsers,
  FaFilePdf,
  FaUniversity,
  FaEnvelope,
  FaListAlt,
  FaDatabase,
  FaGlobe
} from "react-icons/fa";

const sidebarLinks = [
  "Electronic Products",
  "Account Administration",
  "Library Advisory Board",
  "Library Relations Team",
  "Library Research Tools",
  "Promotional Materials",
  "Agents and Vendors",
  "Accessibility",
  "Preservation",
  "Discovery",
];


const featureCards = [
  { title: "Pricing", icon: FaChartBar },
  { title: "Title List (PDF)", icon: FaFilePdf },
  { title: "Manage Your Account", icon: FaTools },
  { title: "Usage Statistics", icon: FaListAlt },
  { title: "University", icon: FaUniversity },
  { title: "Project Euclid", icon: FaGlobe },
  { title: "Collections & Migration", icon: FaDatabase },
  { title: "Contact Library Relations", icon: FaEnvelope },
];

const PJournals = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Librarians</div>

        {/* HERO */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-slate-50 p-8 rounded">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Information for Librarians
            </h1>
            <p className="text-base text-slate-600">
              Resources for institutions: platforms, authentication, collections and support.
            </p>
          </div>

          {/* consolidated icon mosaic on the right */}
          <div className="w-full lg:w-96 grid grid-cols-2 gap-3 bg-white p-3 rounded border border-slate-200">
            {/* {topCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-center h-28 border border-slate-100 rounded"
                >
                  <Icon className="text-blue-600 w-12 h-12" />
                </div>
              );
            })} */}
            <img src="/Author/book_img.webp" alt="Book_image" className="h-44 w-full object-cover border border-slate-100 rounded"/>
          </div>
        </header>

        {/* MAIN */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          {/* SIDEBAR */}
          <aside className="space-y-6">
            <h3 className="text-xs tracking-widest font-semibold">IN THIS SECTION</h3>
            <ul className="space-y-3">
              {sidebarLinks.map((s) => (
                <li key={s} className="text-blue-700 hover:underline cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <section>
            {/* top feature icon grid (icons instead of images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <article
                    key={i}
                    className="bg-white border border-slate-200 p-6 text-center rounded shadow-sm"
                  >
                    <div className="h-36 mb-4 flex items-center justify-center">
                      <div className="flex items-center justify-center w-28 h-28 rounded bg-slate-50 border border-slate-100">
                        <Icon className="text-blue-600 w-12 h-12" />
                      </div>
                    </div>

                    <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                    <h4 className="text-blue-700 font-semibold text-lg">{card.title}</h4>
                  </article>
                );
              })}
            </div>

            {/* textual resources */}
            <div className="prose max-w-none text-slate-700 mb-8">
              <h2 className="text-2xl font-bold">Content Migration Resources</h2>
              <p>
                Visit our <a className="text-blue-700 hover:underline">Migration Resources</a> page
                for information about journals migrating to the READ platform powered by Silverchair.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Top Titles in e-Book Subject Collections</h3>
              <ul className="list-disc list-inside text-slate-700">
                <li>African American, African, and Black Diaspora Studies (PDF)</li>
                <li>Anthropology (PDF)</li>
                <li>Art and Art History (PDF)</li>
                <li>Asian Studies (PDF)</li>
                <li>Environmental Humanities (PDF)</li>
                <li>Gender Studies (PDF)</li>
                <li>LGBTQIA+ Studies (PDF)</li>
                <li>Latin American Studies (PDF)</li>
                <li>Music and Sound Studies (PDF)</li>
                <li>Religious Studies (PDF)</li>
                <li>Transgender Studies (PDF)</li>
              </ul>

              
              <h3 className="mt-8 text-2xl font-bold">Contact Library Relations Team</h3>
              <p>
                The Library Relations Team is your point of contact for information about our digital
                products. Contact{" "}
              </p>
            </div>

            {/* consolidated brand/icon row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* use icons to represent partner logos */}
              <div className="bg-white border border-slate-200 p-6 text-center rounded">
                <div className="h-36 flex items-center justify-center">
                  <FaUniversity className="text-black w-24 h-12" />
                </div>
                <div className="h-1 w-2/5 mx-auto bg-slate-800 my-3" />
                <h4 className="text-blue-700 font-semibold">Humanities Platform</h4>
              </div>

              <div className="bg-white border border-slate-200 p-6 text-center rounded">
                <div className="h-36 flex items-center justify-center">
                  <FaGlobe className="text-green-600 w-24 h-12" />
                </div>
                <div className="h-1 w-2/5 mx-auto bg-slate-800 my-3" />
                <h4 className="text-blue-700 font-semibold">Project Euclid</h4>
              </div>

              <div className="bg-white border border-slate-200 p-6 text-center rounded">
                <div className="h-36 flex items-center justify-center">
                  <FaUsers className="text-teal-700 w-24 h-12" />
                </div>
                <div className="h-1 w-2/5 mx-auto bg-slate-800 my-3" />
                <h4 className="text-blue-700 font-semibold">Scholarly Publishing Collective</h4>
              </div>

              <div className="bg-white border border-slate-200 p-6 text-center rounded">
                <div className="h-36 flex items-center justify-center">
                  <FaBook className="text-indigo-600 w-24 h-12" />
                </div>
                <div className="h-1 w-2/5 mx-auto bg-slate-800 my-3" />
                <h4 className="text-blue-700 font-semibold">Library Research Tools</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PJournals;
// ...existing code...