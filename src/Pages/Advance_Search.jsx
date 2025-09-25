// ...existing code...
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const journals = [
  "- Select a Journal",
  "Duke Mathematical Journal",
  "Social Text",
  "Journal of Political Theory",
  "Other",
];

const Advance_Search = () => {
  const [mainTerm, setMainTerm] = useState("");
  const [matchType, setMatchType] = useState("any");
  const [showFilters, setShowFilters] = useState(false);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [doi, setDoi] = useState("");

  const [citation, setCitation] = useState({
    journal: journals[0],
    year: "",
    volume: "",
    issue: "",
    firstPage: "",
  });

  const handleCitationChange = (e) => {
    const { name, value } = e.target;
    setCitation((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire up real search logic / API here
    console.log({ mainTerm, matchType, author, title, doi, citation });
    alert("Search submitted (mock)");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Advanced Search</div>

        <h1 className="text-3xl font-extrabold mb-6">Advanced Search</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Main term */}
          <section className="bg-white border border-slate-200 p-6 rounded">
            <label className="block mb-2 font-medium">Enter Term</label>
            <input
              type="text"
              value={mainTerm}
              onChange={(e) => setMainTerm(e.target.value)}
              placeholder="Enter Term"
              className="w-full border border-slate-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                SEARCH
              </button>

              <div className="flex items-center gap-4 ml-4">
                <span className="text-sm">Search For:</span>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="match"
                    value="any"
                    checked={matchType === "any"}
                    onChange={() => setMatchType("any")}
                  />
                  Any
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="match"
                    value="all"
                    checked={matchType === "all"}
                    onChange={() => setMatchType("all")}
                  />
                  All
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="match"
                    value="exact"
                    checked={matchType === "exact"}
                    onChange={() => setMatchType("exact")}
                  />
                  Exact Phrase
                </label>
              </div>
            </div>

            <div className="mt-3">
              <button
                type="button"
                onClick={() => setShowFilters((s) => !s)}
                className="text-blue-700 hover:underline text-sm"
              >
                Filter {showFilters ? "▲" : "▼"}
              </button>

              {showFilters && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <select className="border border-slate-300 rounded px-3 py-2">
                    <option>All fields</option>
                    <option>Title</option>
                    <option>Abstract</option>
                    <option>Full text</option>
                  </select>
                  <select className="border border-slate-300 rounded px-3 py-2">
                    <option>Any date</option>
                    <option>Last year</option>
                    <option>Last 5 years</option>
                  </select>
                  <select className="border border-slate-300 rounded px-3 py-2">
                    <option>All content</option>
                    <option>Books</option>
                    <option>Journals</option>
                  </select>
                </div>
              )}
            </div>
          </section>

          {/* Author search */}
          <section className="bg-white border border-slate-200 p-6 rounded">
            <h2 className="text-xl font-semibold mb-3">Author Search</h2>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author Search"
              className="w-full border border-slate-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4">
              <button
                type="button"
                onClick={() => alert("Author search (mock)")}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                SEARCH
              </button>
              <button
                type="button"
                className="ml-4 text-blue-700 hover:underline"
                onClick={() => {
                  setAuthor("");
                }}
              >
                Clear
              </button>
            </div>
          </section>

          {/* Find a specific article */}
          <section className="bg-white border border-slate-200 p-6 rounded">
            <h2 className="text-xl font-semibold mb-4">Find a specific article</h2>

            <div className="mb-4">
              <label className="block mb-2 text-sm">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title Search"
                className="w-full border border-slate-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => alert("Title search (mock)")}
                  className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                >
                  SEARCH
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm">Citation</label>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <select
                  name="journal"
                  value={citation.journal}
                  onChange={handleCitationChange}
                  className="border border-slate-300 rounded px-3 py-2"
                >
                  {journals.map((j) => (
                    <option key={j} value={j}>
                      {j}
                    </option>
                  ))}
                </select>
                <input
                  name="year"
                  value={citation.year}
                  onChange={handleCitationChange}
                  placeholder="Year"
                  className="border border-slate-300 rounded px-3 py-2"
                />
                <input
                  name="volume"
                  value={citation.volume}
                  onChange={handleCitationChange}
                  placeholder="Volume"
                  className="border border-slate-300 rounded px-3 py-2"
                />
                <input
                  name="issue"
                  value={citation.issue}
                  onChange={handleCitationChange}
                  placeholder="Issue"
                  className="border border-slate-300 rounded px-3 py-2"
                />
                <input
                  name="firstPage"
                  value={citation.firstPage}
                  onChange={handleCitationChange}
                  placeholder="First Page"
                  className="border border-slate-300 rounded px-3 py-2"
                />
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => alert("Citation search (mock)")}
                  className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                >
                  SEARCH
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm">DOI Search</label>
              <input
                type="text"
                value={doi}
                onChange={(e) => setDoi(e.target.value)}
                placeholder="DOI Search"
                className="w-full border border-slate-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => alert("DOI search (mock)")}
                  className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Advance_Search;
// ...existing code...