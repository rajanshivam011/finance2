// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUniversity,
  FaUsers,
  FaHandshake,
  FaRegBuilding,
  FaGlobe,
  FaBook,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const sidebarLinks = [
  "How to Join a DUP‑Affiliated Society",
  "Society Benefits & Services",
  "Manage Members",
  "Society Billing",
  "Promotional Opportunities",
  "Society Contact Form",
];

const societyCards = [
  { title: "Labor and Working‑Class History Association", icon: FaRegBuilding, href: "#" },
  { title: "Population Association of America (PAA)", icon: FaUsers, href: "#" },
  { title: "Society for French Historical Studies (SFHS)", icon: FaUniversity, href: "#" },
  { title: "Society for Novel Studies", icon: FaBook, href: "#" },
  { title: "American Dialect Society", icon: FaRegBuilding, href: "#" },
  { title: "American Society for Ethnohistory", icon: FaHandshake, href: "#" },
  { title: "Association for Middle East Women's Studies (AMEWS)", icon: FaUsers, href: "#" },
  { title: "GL/Q Caucus for the Modern Languages", icon: FaGlobe, href: "#" },
  { title: "Project Euclid Partners", icon: FaGlobe, href: "#" },
  { title: "Euclid Prime Collection", icon: FaFileAlt, href: "#" },
];

const Society = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Societies</div>

        {/* HERO */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-slate-50 p-8 rounded">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Welcome Society Members and Officers
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              This information center offers society members the opportunity to manage their
              memberships and view frequently asked questions. Society officers can find information
              about workflow within the Press, and other resources aimed at improving communication
              and service.
            </p>
          </div>

          <div className="w-full lg:w-96 h-44 overflow-hidden rounded border border-slate-200 bg-white">
            {/* replace with real image at /public/images/society-hero.jpg */}
            <img
              src="/Author/society1.jpg"
              alt="stack of journals"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="w-full h-full object-cover"
            />
            {/* fallback icon if image missing */}
            <div className="hidden w-full h-full items-center justify-center text-center p-4" />
          </div>
        </header>

        {/* MAIN */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          {/* SIDEBAR */}
          <aside className="space-y-6">
            <h3 className="text-xs tracking-widest font-semibold">IN THIS SECTION</h3>
            <ul className="space-y-3">
              {sidebarLinks.map((s) => (
                <li key={s}>
                  <a className="text-blue-700 hover:underline block" href="#">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Affiliated Societies</h2>

            {/* societies grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {societyCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <article
                    key={i}
                    className="bg-white border border-slate-200 p-6 text-center rounded shadow-sm"
                  >
                    <div className="h-40 mb-4 flex items-center justify-center border rounded-sm bg-slate-50">
                      <Icon className="text-slate-600 w-24 h-24" />
                    </div>

                    <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />

                    <a href={c.href} className="text-blue-700 font-semibold hover:underline block">
                      {c.title}
                    </a>
                  </article>
                );
              })}
            </div>

            {/* Journals Content Platforms */}
         

            {/* Contact */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-3">
                <li>
                  For more information about our journals program, please contact{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Journal Liaison
                  </a>{" "}
                  or visit our{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Information for Prospective Societies
                  </a>{" "}
                  page.
                </li>
                <li>
                  For ordering and customer service, please see the{" "}
                  <a href="#" className="text-blue-700 hover:underline">
                    Information for Customers
                  </a>{" "}
                  page.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Society;
