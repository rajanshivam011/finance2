// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaBook,
  FaRegNewspaper,
  FaPlay,
  FaRss,
  FaRegListAlt,
  FaDownload,
} from "react-icons/fa";

const featureCards = [
  {
    title: "Issue Alerts",
    desc: "Sign up to receive table-of-contents alerts when a new issue is published.",
    icon: FaRss,
  },
  {
    title: "Mathematics Journals",
    desc: "Learn more about our journals in mathematics and our partnerships with MSP and Project Euclid.",
    icon: FaRegNewspaper,
  },
  {
    title: "Our Journal Publishing Program",
    desc: "Learn why editors and authors value working with Duke University Press.",
    icon: FaPlay,
  },
  {
    title: "Syllabi from Duke University Press",
    desc: "Staff-curated syllabi of incisive work on today's most critical issues.",
    icon: FaRegListAlt,
  },
];

const Book = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Books</div>

        {/* HERO */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-slate-50 p-8 rounded">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Books & Collections
            </h1>
            <p className="text-base text-slate-600 max-w-2xl">
              Explore Duke University Press books, collections, and resources — discover new
              titles, browse by subject, and access reading lists and resources for instructors.
            </p>
          </div>

          <div className="w-full lg:w-96 h-44 overflow-hidden rounded border border-slate-200 bg-white">
            {/* replace src with a real hero image in /public when available */}
            <img
              src="/books-hero.jpg"
              alt="stack of books"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
              <section className="mt-14">
          <div
            className="relative rounded overflow-hidden bg-center bg-cover"
            style={{
              backgroundImage: `url('/books-grid-bg.jpg')`,
              minHeight: "260px",
            }}
            aria-hidden
          >
            <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-semibold max-w-2xl mx-auto">
                  The Duke University Press book collections provide access to thousands of titles
                  in the humanities and social sciences
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                  >
                    BROWSE BY SUBJECT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURE CARDS */}
        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="bg-white border border-slate-200 p-6 text-center rounded shadow-sm"
              >
                <div className="h-36 mb-4 flex items-center justify-center">
                  <div className="w-28 h-28 rounded bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Icon className="text-blue-600 w-12 h-12" aria-hidden />
                  </div>
                </div>

                <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                <h3 className="text-blue-700 font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </article>
            );
          })}
        </section>

        {/* PROMO / BROWSE BY SUBJECT */}
        

        {/* SOCIAL + MEDIA ROW */}
        <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded min-h-[220px]">
            <h4 className="text-lg font-semibold mb-4">Twitter: @DukePress</h4>
            <div className="text-slate-600">Tweets by @DukePress (embed placeholder)</div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded min-h-[220px]">
            <h4 className="text-lg font-semibold mb-4">Facebook: DukeUniversityPress</h4>
            <div className="text-slate-600">Facebook feed (embed placeholder)</div>
          </div>
        </section>

        {/* LISTS / LINKS */}
        <section className="mt-14 prose max-w-none text-slate-700">
          <h2 className="text-2xl font-bold">Resources for Readers & Instructors</h2>
          <ul>
            <li>
              Issue alerts — sign up to receive table-of-contents notifications for journals and
              new book alerts.
            </li>
            <li>
              Reading lists, syllabi, and instructor resources — explore curated lists and
              downloadable materials.
            </li>
            <li>
              Purchase, rights, and permissions — information on ordering, rights requests, and
              licensing.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Book;
