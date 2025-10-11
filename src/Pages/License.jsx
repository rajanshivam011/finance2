// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBook,
  FaFileAlt,
  FaClipboardList,
  FaGlobe,
  FaImage,
  FaFilePdf,
} from "react-icons/fa";

const sidebarLinks = [
  "Book Chapter Requests",
  "Journal Article Requests",
  "Coursepack Requests",
  "Full Translations",
  "Image Requests",
];

const requestCards = [
  { title: "Book Chapter Requests", icon: FaBook, desc: "Request permission to reuse chapters from Duke University Press books." },
  { title: "Journal Article Requests", icon: FaFileAlt, desc: "Permissions and reprint requests for journal articles." },
  { title: "Coursepack Requests", icon: FaClipboardList, desc: "Order coursepack permissions for classroom use." },
  { title: "Full Translations", icon: FaGlobe, desc: "Request rights to translate a book or article into another language." },
  { title: "Image Requests", icon: FaImage, desc: "Permissions to reproduce images or illustrations." },
  { title: "International Rights Guides", icon: FaFilePdf, desc: "Download international rights guides and catalogs (PDF)." },
];

const License = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Licensing & Rights</div>

        <header className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-slate-50 p-8 rounded">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Information for Licensing and Subsidiary Rights
            </h1>
            <p className="text-base text-slate-600">
              For those seeking to use, license, and/or translate Duke University Press materials, in whole or part, choose from the links on this page.
            </p>
          </div>

          <div className="w-full lg:w-96 h-36 md:h-40 overflow-hidden rounded border border-slate-200 bg-white flex items-center justify-center">
            <FaFilePdf className="w-20 h-20 text-indigo-600" />
          </div>
        </header>

        <main className="mt-10 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="space-y-6">
            <h3 className="text-xs tracking-widest font-semibold">IN THIS SECTION</h3>
            <ul className="space-y-3">
              {sidebarLinks.map((link) => (
                <li key={link} className="text-blue-700 hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <section>
            <div className="prose max-w-none text-slate-700 mb-8">
              <p>
                For those seeking to use, license, and/or translate Duke University Press materials, in whole or part, please choose from the links on this page.
              </p>

              <p>
                View and download all International Rights Guides{" "}
                <a href="#" className="text-blue-700 hover:underline">here</a>.
              </p>
            </div>

            {/* request cards (icons in place of images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {requestCards.map((c) => {
                const Icon = c.icon;
                return (
                  <article key={c.title} className="bg-white border border-slate-200 p-6 rounded text-center shadow-sm">
                    <div className="h-32 flex items-center justify-center mb-4">
                      <div className="w-28 h-28 rounded bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Icon className="text-blue-600 w-10 h-10" />
                      </div>
                    </div>

                    <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                    <h4 className="text-blue-700 font-semibold text-lg mb-2">{c.title}</h4>
                    <p className="text-sm text-slate-600">{c.desc}</p>
                  </article>
                );
              })}
            </div>

            <div className="prose max-w-none text-slate-700">
              <h2 className="text-2xl font-bold">How to submit a request</h2>
              <p>
                Most permissions requests can be submitted online. Please include full bibliographic details, the material you wish to use, the medium and circulation, and intended use. If your request involves translation or adaptation, include the target language and territory.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default License;
