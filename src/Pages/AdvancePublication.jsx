import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const articles = [
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/1.pdf",
    title: "Able Taxation: Bridging Fiscal Inequity And Environmental Responsibility In Indian Agriculture ",
    authors: ["Prof. Ravindra Tripathi1, Mrs. Suruchi Singhal2, Dr. Mano Ashish Tripathi3"],
    free: true,
    abstract:
      `In the context of fiscal sustainability and environmental stewardship, this paper presents a critical analysis of the case
      of taxation of agricultural income in India in the context of both equity and efficiency. Agricultural income has
      traditionally been tax-exempt because of its socio-economic weaknesses and food security needs, even though the
      economic character of the sector has undergone substantial transformation.`,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/1.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/2.pdf",
    title: "Machine Learning For Website Defacement Detection: A Survey Of Techniques, Trends, And Challenges ",
    authors: [
      "Jayashree Katti1, Liladhar Dhake2, Sapana Kolambe3",
    ],
    free: true,
    abstract:
      `Web defacement attacks are rapidly changing cyber attacks, characterized by unauthorized alteration of
        online content and misleading techniques utilized to trick users. The rate of cyberattacks is on the rise globally reflected
        by nearly 600 cases reported in India in the first half of 2024 implying that conventional defense tools are slowly
        losing their effectiveness"`,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/2.pdf" }],
  },
  {
    type: "BOOK REVIEW",
    date: "October 08 2025",
    url: "/Author/3.pdf",
    title: "The Interplay Between Service Quality And Strategy In Driving Supermarket Popularity In Myanmar ",
    authors: ["Phyu Phyu Kyaing 1,Ph.D. Research scholar, Dr.Amiya Bhaumik 2, Dr.OyyappanDuraipandi"],
    free: true,
    abstract: `In Myanmar, supermarkets have become an important part of urban life, offering variety, convenience, and quality.
This study evaluates the effectiveness of the relationship between service quality and strategic initiatives in influencing
the country’s supermarket popularity`,
    links: [{ label: "View article", url: "/Author/3.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/4.pdf",
    title: "Deep Hybrid CNN-LSTM Framework For Advanced Social Media Sentiment Analysis In Data-Driven Marketing Analytic ",
    authors: ["Dr. Shrabani Mallick1, Mrs. Parul Awasthi2, Dr. Anil Kumar Yadav3, Bhagya Sri G4, Dr.Rabins Porwal5*, Nidhi Bhatia6and Jyoti Kataria7 "],
    free: true,
    abstract:
      `The aim of the study, the world of data-driven marketing has evolved to the point at which the correct measurement
      of the societal mood at all levels of social media is imperative to shaping a responsive and personalized approach. This
      paper presents a deep hybrid architecture that leverages Convolutional Neural Networks (CNNs) and Long ShortTerm
      Memory (LSTM) networks to overcome the limitations that the sentiment analysis has in the social media due to noise
      and unstructure data.`,
    links: [
      { label: "Abstract" },
      { label: "View article", url: "/information_ethics" },
      { label: "Supplementary data", url: "/Author/4.pdf" },
    ],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/5.pdf",
    title:
      "Environmental Assessment of Solar PV Systems Using Life Cycle Analysis ",
    authors: [
     `Kannan Kandavelu1*, Paramaguru. G2
      , Anbuchezian Ashokan3
      , Silambarasan Rajendran4`
    ],
    free: true,
    abstract:
      `This study presents a comprehensive environmental assessment of solar PV systems using LCA methodology. The results
      show that although solar PV systems significantly reduce greenhouse gas emissions during their operational phase,
      considerable environmental impacts arise during manufacturing and material extraction.`,
    links: [
      { label: "Abstract" },
      { label: "View article", url: "/democracy" },
      { label: "Supplementary data", url: "/Author/5.pdf" },
    ],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/6.pdf",
    title: "Bridging Accuracy AND Transparency: Explainable Ai IN Healthcare -A Review",
    authors: ["Anindita Chakraborty1*, Suvojit Mukhopadhyay2,Piyali De3, Sreelekha Paul4, Sayak Banerjee5,NirmallyaRoy6"],
    free: true,
    abstract:`The application of artificial intelligence (AI) in healthcare has demonstrated revolutionary potential in the areas of patient
    outcome prediction, treatment planning, and diagnosis. `,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/6.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/7.pdf",
    title: "Sustainable Finance And Its Economic Impact: Evidence From India Green Bond Market",
    authors: ["Dr. Prashant Kumarl, Dr. M. Zaheer Ahmed2, Dr. Alok Kumai"],
    free: true,
    abstract:`This study investigates the relationship between green bonds and economic growth in India using
    econometric methods over the period 2000-2023.`,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/7.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/8.pdf",
    title: "MentorshipAs ATool To Drive Employee PerformanceAt The Workplace Within The PharmaceuticalAnd Healthcare Sector",
    authors: ["Shailendra Nath Tripathi1, Dr. Mohani Shankar2"],
    free: true,
    abstract:`This study critically examines the effects of mentorship programs on job performance within
    the pharmaceutical and healthcare sectors industries characterized by high employee turnover
    and the need for skill-intensive labor.`,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/8.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/9.pdf",
    title: "Evaluating Human ResourceAccounting In Relation To Employee Compensation And Performance In Private Hospitals Of Manipur",
    authors: ["Maibam Angkita Devi1, Prof. Ningombam Jayanti2"],
    free: true,
    abstract:`This investigationevaluates complex links between Human Resource Accounting (HRA)
    processes, employee compensation, and performance in Manipur's private hospitals.`,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/9.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/10.pdf",
    title: "",
    authors: [""],
    free: true,
    abstract:``,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/10.pdf" }],
  },
  {
    type: "RESEARCH ARTICLE",
    date: "October 08 2025",
    url: "/Author/11.pdf",
    title: "",
    authors: [""],
    free: true,
    abstract:``,
    links: [{ label: "Abstract" }, { label: "View article", url: "/Author/11.pdf" }],
  },
];

export default function AdvancePublication() {
  const [openAbstract, setOpenAbstract] = useState(null);
  const nav=useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-teal-50 min-h-screen py-8 px-4 flex flex-col md:flex-row">
        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-teal-800">
            Advance Publication
          </h1>
          {articles.map((a, idx) => (
            <div
              key={idx}
              className="mb-10 pb-6 border-b border-gray-200 bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl animate-fadeIn"
              style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}
            >
              <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
                {a.type} | {a.date}
              </div>

              {/* Title */}
              <div className="text-2xl font-semibold mb-2 cursor-pointer">
                <Link
                  to={a.url}
                  target="_blank"
                  className="text-teal-700 hover:border-b-2 border-amber-500 transition-all"
                >
                  {a.title}
                </Link>
                {a.free && (
                  <span className="ml-2 px-2 py-0.5 bg-teal-100 text-teal-700 text-xs rounded font-bold">
                    FREE
                  </span>
                )}
              </div>

              <div className="text-teal-600 text-sm mb-2">
                {a.authors.map((author, i) => (
                  <span key={i}>
                    {author}
                    {i < a.authors.length - 1 && "; "}
                  </span>
                ))}
              </div>

              {/* Links + Abstract dropdown */}
              <div className="mt-4 flex gap-2 flex-wrap">
                {a.links.map((l, i) =>
                  l.label === "Abstract" ? (
                    <div key={i} className="relative">
                      <button
                        type="button"
                        className="px-3 py-1 border border-gray-200 rounded-lg text-sm bg-teal-50 text-teal-700 hover:bg-teal-100 transition-all"
                        onClick={() =>
                          setOpenAbstract(openAbstract === idx ? null : idx)
                        }
                      >
                        Abstract <span className="ml-1">&#9660;</span>
                      </button>
                      {openAbstract === idx && (
                        <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-100 rounded-lg shadow-xl z-10 p-4 text-gray-700 animate-fadeIn">
                          <div className="font-bold mb-2 text-teal-700">Abstract</div>
                          <div>{a.abstract}</div>
                          <button
                            className="mt-3 text-teal-600 underline text-sm hover:text-amber-500"
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
                      className="px-3 py-1 border border-gray-200 rounded-lg text-sm bg-teal-50 text-teal-700 hover:bg-teal-100 transition-all"
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
        <aside className="w-full md:w-1/4 flex-shrink-0 mt-8 md:mt-0">
        <div className="bg-teal-800 text-white rounded-xl shadow-lg">
              <div className="font-bold px-4 py-2 border-b border-teal-700">EMAIL ALERTS</div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/ap')}>
                Advance Publication
              </div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/')}>
                Latest Issue
              </div>
            </div>
          <RightSidebar selectedTab={0} />
        </aside>
      </div>
      <Footer />
    </>
  );
}