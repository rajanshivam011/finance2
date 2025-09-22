import React, { useState } from "react";
import RightSidebar from "./RightSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const articles = [
  {
    type: "RESEARCH ARTICLE",
    date: "August 11 2025",
    title: "Lots of Pain for Little Gain: Three Decades of Medicaid Estate Recovery",
    authors: [
      "Amanda Spishak-Thomas",
      "Emma Sandoe",
      "Heather Howard"
    ],
    free: true,
    abstract: "This article reviews the impact of Medicaid estate recovery over three decades, highlighting policy outcomes and challenges.",
    links: [
      { label: "Abstract" },
      { label: "View article", url: "#" }
    ]
  },
  {
    type: "RESEARCH ARTICLE",
    date: "August 11 2025",
    title: "Section 1115 Substance Use Disorder Waivers: Opportunities and Limitations",
    authors: [
      "Thomas Statchen",
      "Harold Pollack",
      "Amanda J. Abraham",
      "Christina M. Andrews",
      "Colleen M. Grogan"
    ],
    free: true,
    abstract: "This article analyzes Section 1115 waivers for substance use disorders, discussing both opportunities and limitations.",
    links: [
      { label: "Abstract" },
      { label: "View article", url: "#" }
    ]
  },
  {
    type: "BOOK REVIEW",
    date: "August 11 2025",
    title: "The Affordable Care Act: At the Nexus of Politics and Policy",
    authors: [
      "Noémie Morize"
    ],
    free: true,
    abstract: "",
    links: [
      { label: "View article", url: "#" }
    ]
  },
  {
    type: "RESEARCH ARTICLE",
    date: "August 11 2025",
    title: "What Information Elicits Policy Enthusiasm? Older Americans, the ACA, and Medicare",
    authors: [
      "Simon F. Haeder"
    ],
    free: true,
    abstract: "This article explores what types of information drive policy enthusiasm among older Americans regarding the ACA and Medicare.",
    links: [
      { label: "Abstract" },
      { label: "View article", url: "#" },
      { label: "Supplementary data", url: "#" }
    ]
  },
  {
    type: "RESEARCH ARTICLE",
    date: "August 11 2025",
    title: "Democracy, Trust, and Political Orientation: Disentangling Mechanisms Shaping Individuals’ Vaccine Attitudes",
    authors: [
      "Marcello Antonini",
      "Renu Singh",
      "Alessia Melegaro",
      "Aleksandra Torbica",
      "Jeremy Keith Ward"
    ],
    free: true,
    abstract: "This article investigates how democracy, trust, and political orientation influence individuals’ attitudes toward vaccines.",
    links: [
      { label: "Abstract" },
      { label: "View article", url: "#" },
      { label: "Supplementary data", url: "#" }
    ]
  }
];

export default function AdvancePublication() {
  const [openAbstract, setOpenAbstract] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-8 px-2 flex flex-col md:flex-row">
      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Advance Publication</h1>
        {articles.map((a, idx) => (
          <div key={idx} className="mb-10 pb-6 border-b">
            <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
              {a.type} | {a.date}
            </div>
            <div className="text-2xl font-semibold mb-2">
              {a.title}
              {a.free && (
                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded font-bold">FREE</span>
              )}
            </div>
            <div className="text-blue-700 text-sm mb-2">
              {a.authors.map((author, i) => (
                <span key={i}>
                  {author}
                  {i < a.authors.length - 1 && "; "}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2 flex-wrap">
              {a.links.map((l, i) =>
                l.label === "Abstract" ? (
                  <div key={i} className="relative">
                    <button
                      type="button"
                      className="px-2 py-1 border rounded text-sm bg-gray-50 hover:bg-gray-100"
                      onClick={() => setOpenAbstract(openAbstract === idx ? null : idx)}
                    >
                      Abstract <span className="ml-1">&#9660;</span>
                    </button>
                    {openAbstract === idx && (
                      <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-300 rounded shadow-lg z-10 p-4 text-gray-800">
                        <div className="font-bold mb-2">Abstract</div>
                        <div>{a.abstract}</div>
                        <button
                          className="mt-3 text-blue-700 underline text-sm"
                          onClick={() => setOpenAbstract(null)}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={i}
                    href={l.url}
                    className="px-2 py-1 border rounded text-sm bg-gray-50 hover:bg-gray-100"
                  >
                    {l.label}
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </main>
      {/* Right Sidebar */}
      <aside className="w-full md:w-1/4 flex-shrink-0">
        <RightSidebar selectedTab={0} />
      </aside>
    </div>
    <Footer/>
    </>
  );
}