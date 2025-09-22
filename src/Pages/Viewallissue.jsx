import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RightSidebar from "./RightSidebar";

// Organize all content into sections
const sections = [
  {
    label: "ARTICLES",
    articles: [
      {
        title:
          "Hospital Consolidation Across Geographic Markets: Insights from Market Participants on Mechanisms for Price Increases",
          id:"/hos_con",
          authors: [
          "Katherine L. Gudiksen",
          "Andréa E. Caballero",
          "Paul B. Ginsburg",
          "Bruce Allain",
          "Thomas L. Greaney",
        ],
        free: true,
        abstract:
          "Context: Consolidation among health systems has resulted in increased prices and has caused the cost of employer-sponsored health benefits to increase much faster than inflation over the past few decades. Earlier quantitative research shows small but significant price increases resulting from transactions that expand the geographic footprint of health systems, but the mechanisms by which these cross-market acquisitions raise prices is not completely resolved. Methods: In this qualitative study, the authors interview market participants to elucidate the experience of employers, insurers, and others when negotiating with large health systems.Findings: The respondents report that employer demand for broad, stable provider networks and a lack of employer support for insurers when negotiating with large health systems undermined insurers’ ability to negotiate lower prices. Additionally, the interviews identified the widespread use of restrictive contract terms by health systems and misaligned financial incentives between employers and consultants engaged to act on their behalf.Conclusions: Without government action, employers will be unable to restrain price increases that result from increasing market power of consolidated health systems. The authors identify policy levers that regulators can use to increase competition, but the oligopolistic nature of many health care markets in the United States suggest that even more significant government action may be needed.",
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/pdf/1.pdf" },
        ],
      },
      {
        title:
          "It’s Only a Crisis if It’s Fit to Print: Examining the Relationship Between Overdose Rates, News Coverage, and the Presence of the Opioid Crisis in State Legislative Campaigns",
          id:"/crisis",
          authors: [
          "Rachael L. M. Erickson",
          "Joshua Meyer-Gutbrod",
        ],
        free: true,
        abstract:
          `Context: Paid leave for serious personal and family illnesses can significantly improve health outcomes. With no federal paid family and medical leave (PFML) policy, states are increasingly adopting their own. Yet eligibility criteria for paid leave and job protection vary markedly across states, as does benefit adequacy, affecting coverage and equity.
Methods: The authors developed a database of state-level paid leave policies to systematically analyze each state's eligibility criteria for leave and job protection. They applied the policy database's detailed criteria to employment data from the US Current Population Survey Annual Social and Economic Supplement to analyze eligibility by race/ethnicity, gender, and education. They measured benefit adequacy by analyzing whether family income would drop below the federal poverty threshold during a worker's leave.
Findings: Minimum earnings, tenure, and hours rules disproportionately exclude workers with less education and women from paid leave and/or job protection. Minimum firm size disproportionately excludes workers with less education and Latinx workers from job protection. Black and Latinx workers’ family income is more likely to fall below poverty during leave.
Conclusions: State-level PFML has expanded coverage in the absence of a federal policy. Remaining gaps and inequities could be reduced by lowering or eliminating requirements for minimum firm size, tenure, and hours; raising wage replacement rates; and ensuring full job protection.`,
        links: [
          { label: "Abstract" },
          { label: "Supplementary data", url: "#" },
          { label: "PDF", url: "/pdf/crisis.pdf" },
        ],
      },
      {
        title:
          "Paid Leave for Personal and Family Illness: Impacts of State Policy Design on Coverage and Access by Race, Gender, and Education Level",
          id:"/hus_con",
          authors: [
          "Aleta Sprague",
          "Alison Earle",
          "Amy Raub",
          "Firooz Kabir",
          "Michael McCormack",
        ],
        free: true,
        abstract:
          `Context: Paid leave for serious personal and family illnesses can significantly improve health outcomes. With no federal paid family and medical leave (PFML) policy, states are increasingly adopting their own. Yet eligibility criteria for paid leave and job protection vary markedly across states, as does benefit adequacy, affecting coverage and equity.
            Methods: The authors developed a database of state-level paid leave policies to systematically analyze each state's eligibility criteria for leave and job protection. They applied the policy database's detailed criteria to employment data from the US Current Population Survey Annual Social and Economic Supplement to analyze eligibility by race/ethnicity, gender, and education. They measured benefit adequacy by analyzing whether family income would drop below the federal poverty threshold during a worker's leave.
            Findings: Minimum earnings, tenure, and hours rules disproportionately exclude workers with less education and women from paid leave and/or job protection. Minimum firm size disproportionately excludes workers with less education and Latinx workers from job protection. Black and Latinx workers’ family income is more likely to fall below poverty during leave.
            Conclusions: State-level PFML has expanded coverage in the absence of a federal policy. Remaining gaps and inequities could be reduced by lowering or eliminating requirements for minimum firm size, tenure, and hours; raising wage replacement rates; and ensuring full job protection.`,
        links: [
          { label: "Abstract" },
          { label: "PDF", url: "/pdf/3.pdf" },
        ],
      },
      {
        title: "Analyzing Public Support for School-Based Mental Health Services",
        id:"/hus_con",
        authors: ["Nicholas Hemauer", "Seth Warner"],
        free: true,
        abstract: "This article analyzes public support for mental health services in schools.",
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "Supplementary data", url: "#" },
          { label: "PDF", url: "/pdf/4.pdf" },
        ],
      },
    ],
  },
  {
    label: "TRACKING HEALTH REFORM",
    articles: [
      {
        title: "Medicaid and the Great Unwinding: The Administrative Presidency Meets Federalism",
        id:"/hus_con",
        authors: ["Michael K. Gusmano", "Frank J. Thompson"],
        free: true,
        abstract: "This article discusses Medicaid and the impact of federalism on administrative presidency.",
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/pdf/5.pdf" },
        ],
      },
    ],
  },
  {
    label: "BOOKS",
    articles: [
      {
        title: "Politics and Expertise: How to Use Science in a Democratic Society",
        id:"/hus_con",
        authors: ["Ann C. Keller"],
        free: true,
        abstract: "This book explores the role of science and expertise in democratic societies.",
        links: [
          { label: "Extract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/pdf/6.pdf" },
        ],
      },
      {
        title: "The COVID-19 Intelligence Failure: Why Warning Was Not Enough",
        id:"/hus_con",
        authors: ["Robert L. Ostergard, Jr."],
        free: true,
        abstract: "This book examines intelligence failures during the COVID-19 pandemic.",
        links: [
          { label: "Extract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/pdf/7.pdf" },
        ],
      },
    ],
  },
];

const sidebarTabs = [
  {
    label: "LATEST",
    articles: [
      "Medicaid and the Great Unwinding: The Administrative Presidency Meets Federalism",
      "Hospital Consolidation Across Geographic Markets: Insights from Market Participants on Mechanisms for Price Increases",
      "Analyzing Public Support for School-Based Mental Health Services",
      "It’s Only a Crisis if It’s Fit to Print: Examining the Relationship Between Overdose Rates, News Coverage, and the Presence of the Opioid Crisis in State Legislative Campaigns",
      "Paid Leave for Personal and Family Illness: Impacts of State Policy Design on Coverage and Access by Race, Gender, and Education Level",
    ],
  },
  {
    label: "MOST READ",
    articles: [
      "Polarization, Partisanship, and Health in the United States",
      "What Is Wellness Now?",
      "It’s Only a Crisis if It’s Fit to Print: Examining the Relationship Between Overdose Rates, News Coverage, and the Presence of the Opioid Crisis in State Legislative Campaigns",
      "Hospital Consolidation Across Geographic Markets: Insights from Market Participants on Mechanisms for Price Increases",
      "Medicare at 60: A Popular Program Facing Challenges",
    ],
  },
  {
    label: "MOST CITED",
    articles: [
      "Arrests of and Forced Interventions on Pregnant Women in the United States, 1973–2005: Implications for Women's Legal Status and Public Health",
      "Pandemic Politics: Timing State-Level Social Distancing Responses to COVID-19",
      "Weighing Both Sides: Morality, Mortality, and Framing Contests over Obesity",
      "The Biological Concept of Race and Its Application to Public Health and Epidemiology",
      "Lay Participation in Health Care Decision Making: A Conceptual Framework",
    ],
  },
];

export default function Viewallissue() {
  // const [tab, setTab] = useState(0);
  const [openAbstract, setOpenAbstract] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8 px-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4 bg-white rounded shadow p-0 flex flex-col">
            <div className="flex-shrink-0 z-10">
            <div className="w-80 h-[420px] bg-gradient-to-b from-[#503a56] to-purple-200 rounded-lg flex flex-col justify-center items-center text-white font-bold text-xl p-6">
              <div className="mt-10 mb-32 text-center leading-tight">
                Journal of<br />
                Health Politics,<br />
                Policy<br />
                and Law
              </div>
              <div className="text-purple-200 text-xs mt-auto mb-6 text-left w-full pl-2">
                Volume 50<br />
                Number 5<br />
                October 2025
              </div>
              {/* <div className="w-3 h-3 bg-purple-300 rounded-sm mt-2"></div> */}
            </div>
          </div>
              <div className="ml-8 mt-8 text-xs text-gray-700 font-bold">
                ISSN 0361-6878<br />
                EISSN 1527-1927
              </div>
              <div className="font-bold mt-4 mb-2 ml-8">In this Issue</div>
              <ul className="text-sm text-blue-700 space-y-1 mb-4 ml-8">
                <li>Articles</li>
                <li>Tracking Health Reform</li>
              </ul>
              <a href="#" className="text-blue-700 underline text-sm ml-8">&lt; Previous Issue</a>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* ...unchanged search bar... */}
            <div className="bg-white rounded shadow p-4">
              {sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className={`font-bold text-lg mb-4 ${sIdx > 0 ? "mt-8" : ""}`}>
                    {section.label}
                  </div>
                  {section.articles.map((a, idx) => (
                    <div key={idx} className="mb-8 pb-4 border-b last:border-b-0 relative">
                      <Link to={`${a.id}`} className="text-xl font-semibold text-blue-700 hover:underline">
                        {a.title}
                        {a.free && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">FREE</span>
                        )}
                      </Link>
                      <div className="mt-1 text-sm text-blue-700">
                        {a.authors.map((author, i) => (
                          <span key={i}>
                            {author}
                            {i < a.authors.length - 1 && "; "}
                          </span>
                        ))}
                      </div>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {a.links.map((l, i) =>
                          l.label === "Abstract" || l.label === "Extract" ? (
                            <div key={i} className="relative">
                              <button
                                type="button"
                                className="px-2 py-1 border rounded text-sm bg-gray-50 hover:bg-gray-100"
                                onClick={() =>
                                  setOpenAbstract(openAbstract === `${sIdx}-${idx}` ? null : `${sIdx}-${idx}`)
                                }
                              >
                                {l.label}
                              </button>
                              {openAbstract === `${sIdx}-${idx}` && (
                                <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-300 rounded shadow-lg z-10 p-4 text-gray-800">
                                  <div className="font-bold mb-2">{l.label}</div>
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
                </div>
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-full md:w-1/4 flex flex-col gap-6">
            {/* Email Alerts */}
            {/* <div className="bg-black text-white rounded shadow mb-4">
              <div className="font-bold px-4 py-2 border-b border-gray-700">EMAIL ALERTS</div>
              <div className="bg-blue-700 px-4 py-2 hover:bg-blue-800 cursor-pointer">Advance Publication</div>
              <div className="bg-blue-700 px-4 py-2 hover:bg-blue-800 cursor-pointer">Latest Issue</div>
            </div> */}
            {/* Tabs */}
            {/* <div className="bg-white rounded shadow">
              <div className="flex border-b">
                {sidebarTabs.map((t, i) => (
                  <button
                    key={i}
                    className={`flex-1 px-4 py-2 font-bold text-sm ${
                      tab === i
                        ? "border-b-2 border-black text-black"
                        : "text-gray-700"
                    }`}
                    onClick={() => setTab(i)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="p-4">
                {sidebarTabs[tab].articles.map((art, i) => (
                  <div key={i} className="mb-2">
                    <a href="#" className="text-blue-700 underline text-sm">
                      {art}
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
            <RightSidebar/>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}