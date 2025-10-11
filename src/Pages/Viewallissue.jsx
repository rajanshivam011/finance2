import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Organize all content into sections
const sections = [
  {
    label: "ARTICLES",
    articles: [
      {
        title:
          "Impact Of Emerging Farming Practices On Antioxidant Activity In Commonly Eaten Leafy Vegetables",
          url:"/Vol_1/6.pdf",
          authors: [
          "Pooja Kashyap1* and Monika Jain1" ,
        ],
        free: true,
        abstract:
          `Context: Precision medicine (PM) focuses on customizing medical attention to genetic, environmental, and lifestyle
            factors pertaining to the individual’s life. In India, growing initiatives like the Genome India Project and Indian
            Cancer Genome Atlas aim to map genetic diversity for personalized therapies. PM has shown significant promise in
            oncology, asthma, diabetes, and rare genetic disorders. Integration with technologies such as AI and multi-omics
            enhances disease prediction and targeted therapy. Despite rapid progress, challenges like data privacy, regulatory gaps,
            limited infrastructure, and public awareness persist. Addressing these hurdles is vital to realize the full potential of
            precision medicine in Indian healthcare.`,
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/Vol_1/6.pdf" },
        ],
      },
      {
        title:
          "Precision Medicine: Advancements, Applications, and Future Directions - Perspectives from India",
          url:"/Vol_2/6.pdf",
          authors: [
          "Syed Mohamed Omar1*, Raziur Rahman M1 , Arya Sandip Jadhav1, Sujitha Mathivanan1, Dr K P Arun1 Dr Deepalakshmi1",
        ],
        free: true,
        abstract:
          `Context: Precision medicine (PM) focuses on customizing medical attention to genetic, environmental, and lifestyle
            factors pertaining to the individual’s life. In India, growing initiatives like the Genome India Project and Indian
            Cancer Genome Atlas aim to map genetic diversity for personalized therapies. PM has shown significant promise in
            oncology, asthma, diabetes, and rare genetic disorders. Integration with technologies such as AI and multi-omics
            enhances disease prediction and targeted therapy. Despite rapid progress, challenges like data privacy, regulatory gaps,
            limited infrastructure, and public awareness persist. Addressing these hurdles is vital to realize the full potential of
            precision medicine in Indian healthcare.`,
        links: [
          { label: "Abstract" },
          { label: "Supplementary data", url: "#" },
          { label: "PDF", url: "/Vol_2/6.pdf" },
        ],
      },
      {
        title:
          "Towards Sustainable Taxation: Bridging Fiscal Inequity And Environmental Responsibility In Indian Agriculture ",
          url:"/Vol_3/6.pdf",
          authors: [
          "Prof. Ravindra Tripathi1, Mrs. Suruchi Singhal2, Dr. Mano Ashish Tripathi3",
        ],
        free: true,
        abstract:
          `Context: In the context of fiscal sustainability and environmental stewardship, this paper presents a critical analysis of the case
            of taxation of agricultural income in India in the context of both equity and efficiency. Agricultural income has
            traditionally been tax-exempt because of its socio-economic weaknesses and food security needs, even though the
            economic character of the sector has undergone substantial transformation`,
        links: [
          { label: "Abstract" },
          { label: "PDF", url: "/Vol_3/6.pdf" },
        ],
      },
      {
        title: "Early Indicators Of Alterations In Hematological And Inflammatory Biomarkers Among Smoking And Smokeless Tobacco Users - Comparative Analysis",
        url:"/Vol_3/7.pdf",
        authors: ["Manikandan Sathiyaseelan1, Vickneshwaran Vinayagam2, Pradeep Jothimani3, Pajanivel Ranganadin4,Balanehru Subramanian5, Richa Gupta6, Nikhilesh Singh"],
        free: true,
        abstract: "This article analyzes public support for mental health services in schools.",
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "Supplementary data", url: "#" },
          { label: "PDF", url: "/Vol_3/7.pdf" },
        ],
      },
    ],
  },
  {
    label: "TRACKING HEALTH REFORM",
    articles: [
      {
        title: "Do Location-Driven Perceptions Matter In Policy Governance? An Empirical Study Of MGNREGA Outcome In Assam ",
        url:"/Right/18.pdf",
        authors: ["Masud Ul Haque1, Abdur Rashid Ahmed2"],
        free: true,
        abstract: "India’s largest and most extensive government-funded right-based rural employment programme, the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), has been instrumental in alleviating rural poverty.However, its outcomes vary across geographic and socio-economic contexts.",
        links: [
          { label: "Abstract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/Right/18.pdf" },
        ],
      },
    ],
  },
  {
    label: "BOOKS",
    articles: [
      {
        title: "TP53 As A Early Recurrence-Linked Biomarker In Tongue Squamous Cell Carcinoma: A Proteomic And Bioinformatic Study",
        url:"/Right/19.pdf",
        authors: ["G. V. Lakshmi1*, K. Eswar Kumar2, Parthasarathi Bhattacharyya3, K. G. K. Deepak4, John Dogulas Palleti5 "],
        free: true,
        abstract: "Tongue squamous cell carcinoma (TSCC) is characterized by high recurrence rates and poor prognosis, yet the underlying molecular mechanisms remain incompletely defined",
        links: [
          { label: "Extract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/Right/19.pdf" },
        ],
      },
      {
        title: "Corporate Environmental Values And Culture As Catalysts For Sustainable Business Practices",
        url:"/Right/20.pdf",
        authors: ["Dr Suman Kolpula1, Dr. S. Udayakumar2, G. Kothandaraman3, Dr. Ramprakash O. Panchariya4, Dr.Kumari Soni5, Dr. Swati Gupta6"],
        free: true,
        abstract:"This research investigates the dynamic intersection of Corporate Environmental Values (CEVs), Environmental Culture (EC), and Business Sustainability (BS) in Indian companies with a huge mixed-methods research design.",
        links: [
          { label: "Extract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/Right/20.pdf" },
        ],
      },
      {
        title: "Bio-Ecological Assessment of the Cereal Cyst Nematode (Heterodera Avenae) in the North West of Algeria ",
        url:"/Right/21.pdf",
        authors: ["Baghdadi Djilali1, Si Mohammed Abdesselem2, Bentaallah Mohammed El Amine3, Cherrad Hayet4,Berkane Ibrahim5, Berkane Benaouda6"],
        free: true,
        abstract:"This research investigates the dynamic intersection of Corporate Environmental Values (CEVs), Environmental Culture (EC), and Business Sustainability (BS) in Indian companies with a huge mixed-methods research design.",
        links: [
          { label: "Extract" },
          { label: "View article", url: "#" },
          { label: "PDF", url: "/Right/21.pdf" },
        ],
      },
    ],
  },
];

export default function Viewallissue() {
  const [openAbstract, setOpenAbstract] = useState(null);
  const nav=useNavigate();
  return (
    <>
      <Navbar />
      <div className="bg-teal-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          {/* <aside className="w-full md:w-1/4 bg-white rounded-xl shadow-lg p-0 flex flex-col">
            <div className="flex-shrink-0 z-10">
              <div className="w-full h-[420px] bg-gradient-to-b from-teal-600 to-teal-800 rounded-t-xl flex flex-col justify-center items-center text-white font-bold text-xl p-6">
                <div className="mt-10 mb-32 text-center leading-tight">
                  Global<br />
                  Policy<br />
                  Review
                </div>
                <div className="text-teal-200 text-xs mt-auto mb-6 text-left w-full pl-2">
                  Volume 12<br />
                  Number 3<br />
                  November 2025
                </div>
              </div>
            </div>
            <div className="ml-8 mt-8 text-xs text-gray-700 font-bold">
              ISSN 8765-4321<br />
              EISSN 1234-5678
            </div>
            <div className="font-bold mt-4 mb-2 ml-8 text-teal-700">In this Issue</div>
            <ul className="text-sm text-teal-600 space-y-1 mb-4 ml-8">
              <li>Articles</li>
              <li>Tracking Health Reform</li>
              <li>Books</li>
            </ul>
            <a href="#" className="text-teal-600 underline text-sm ml-8 hover:border-b-2 border-amber-500 transition-all">
              &lt; Previous Issue
            </a>
          </aside> */}

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className={`font-bold text-lg mb-4 ${sIdx > 0 ? "mt-8" : ""} text-teal-700`}>
                    {section.label}
                  </div>
                  {section.articles.map((a, idx) => (
                    <div key={idx} className="mb-8 pb-4 border-b border-gray-200 last:border-b-0 relative">
                      <Link
                        to={`${a.url}`} 
                        target="_blank"
                        className="text-xl font-semibold text-teal-700 hover:border-b-2 border-amber-500 transition-all"
                      >
                        {a.title}
                        {a.free && (
                          <span className="ml-2 px-2 py-0.5 bg-teal-100 text-teal-700 text-xs rounded font-bold">
                            FREE
                          </span>
                        )}
                      </Link>
                      <div className="mt-1 text-sm text-teal-600">
                        {a.authors.map((author, i) => (
                          <span key={i}>
                            {author}
                            {i < a.authors.length - 1 && "; "}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {a.links.map((l, i) =>
                          l.label === "Abstract" || l.label === "Extract" ? (
                            <div key={i} className="relative">
                              <button
                                type="button"
                                className=" cursor-pointer px-3 py-1 border border-gray-200 rounded-lg text-sm bg-teal-50 text-teal-700 hover:bg-teal-100 transition-all"
                                onClick={() =>
                                  setOpenAbstract(openAbstract === `${sIdx}-${idx}` ? null : `${sIdx}-${idx}`)
                                }
                              >
                                {l.label} <span className="ml-1">&#9660;</span>
                              </button>
                              {openAbstract === `${sIdx}-${idx}` && (
                                <div className="cursor-pointer absolute left-0 mt-2 w-96 bg-white border border-gray-100 rounded-lg shadow-xl z-10 p-4 text-gray-700 animate-fadeIn">
                                  <div className="font-bold mb-2 text-teal-700">{l.label}</div>
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
                              {...(l.label === "PDF" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
            <div className="bg-teal-800 text-white rounded-xl shadow-lg">
              <div className="font-bold px-4 py-2 border-b border-teal-700">EMAIL ALERTS</div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/ap')}>
                Advance Publication
              </div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/')}>
                Latest Issue
              </div>
            </div>
            {/* RightSidebar Component */}
            <RightSidebar />
          </aside>
        </div>
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
}