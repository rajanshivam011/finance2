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
  FaListAlt
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

const topCards = [
  { title: "Humanities and Social Science Content Platform", icon: FaUniversity },
  { title: "Mathematics Content Platform", icon: FaCalculator },
  { title: "Scholarly Publishing Collective", icon: FaUsers },
  { title: "Library Research Tools", icon: FaBook },
];

const featureCards = [
  { title: "Pricing", icon: FaChartBar },
  { title: "Title List", icon: FaListAlt || FaFilePdf }, // fallback
  { title: "Manage Your Account", icon: FaTools },
  { title: "Usage Statistics", icon: FaChartBar },
  { title: "Duke University Press", icon: FaUniversity },
  { title: "Project Euclid", icon: FaUsers },
  { title: "Scholarly Publishing Collective", icon: FaUsers },
  { title: "Library Research Tools", icon: FaBook },
];

const Librarians = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Librarians</div>

        <header className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-slate-50 p-8 rounded">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
              Library Relations & Resources
            </h1>
            <p className="text-base text-slate-600">
              Information for librarians: platforms, authentication, collections and support.
            </p>
          </div>

          <div className="w-full md:w-80 h-36 md:h-40 overflow-hidden rounded grid grid-cols-2 gap-2 p-2 bg-white">
            {/* consolidated icon mosaic */}
            {topCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="border border-slate-200 flex items-center justify-center bg-white"
                >
                  <Icon className="text-blue-600 w-12 h-12" />
                </div>
              );
            })}
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          <aside className="space-y-4">
            <h3 className="text-xs tracking-widest font-semibold">IN THIS SECTION</h3>
            <ul className="space-y-3">
              {sidebarLinks.map((s) => (
                <li key={s} className="text-blue-700 hover:underline cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </aside>

          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <article key={i} className="bg-white border border-slate-200 p-6 text-center">
                    <div className="h-36 mb-4 flex items-center justify-center">
                      <Icon className="text-blue-600 w-20 h-20" />
                    </div>
                    <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                    <h4 className="text-blue-700 font-semibold text-lg">{card.title}</h4>
                  </article>
                );
              })}
            </div>
            
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

              <h3 className="mt-8 text-2xl font-bold">IP Authentication Update</h3>
              <p>
                To submit IP address updates to <strong>Duke University Press</strong> and
                <strong> Scholarly Publishing Collective</strong> please use the IP registry.
              </p>

              <h3 className="mt-8 text-2xl font-bold">Contact Library Relation Team</h3>
              <p>
                The Library Relations Team is your point of contact for information about our digital
                products. Contact <a className="text-blue-700 hover:underline">dup_libraryrelations@duke.edu</a>
                for product questions, pricing, and licensing.
              </p>
            </div>

            {/* consolidated icon strip */}
            {/* <div className="grid grid-cols-4 gap-6 mb-10">
              {topCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <article key={i} className="bg-white border border-slate-200 p-6 text-center">
                    <div className="h-36 mb-4 flex items-center justify-center">
                      <Icon className="text-blue-600 w-20 h-20" />
                    </div>
                    <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                    <h4 className="text-blue-700 font-semibold text-lg">{c.title}</h4>
                  </article>
                );
              })}
            </div> */}

            {/* feature grid (icons instead of linked images) */}
            
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Librarians;
// ...existing code...