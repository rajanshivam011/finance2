import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Mock data for multiple issues (simulating different issues)
const issueData = {
  issue1: [
    {
      label: "ARTICLES",
      articles: [
        {
          title: "Impact Of Emerging Farming Practices On Antioxidant Activity In Commonly Eaten Leafy Vegetables",
          url: "/Vol_1/6.pdf",
          authors: ["Pooja Kashyap1*", "Monika Jain1"],
          free: true,
          abstract: `Context: Precision medicine (PM) focuses on customizing medical attention to genetic, environmental, and lifestyle factors pertaining to the individual’s life...`,
          links: [
            { label: "Abstract" },
            { label: "View article", url: "#" },
            { label: "PDF", url: "/Vol_1/6.pdf" },
          ],
        },
      ],
    },
    {
      label: "TRACKING HEALTH REFORM",
      articles: [
        {
          title: "Do Location-Driven Perceptions Matter In Policy Governance? An Empirical Study Of MGNREGA Outcome In Assam",
          url: "/Right/18.pdf",
          authors: ["Masud Ul Haque1", "Abdur Rashid Ahmed2"],
          free: true,
          abstract: `India’s largest and most extensive government-funded right-based rural employment programme...`,
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
          url: "/Right/19.pdf",
          authors: ["G. V. Lakshmi1*", "K. Eswar Kumar2", "Parthasarathi Bhattacharyya3", "K. G. K. Deepak4", "John Dogulas Palleti5"],
          free: true,
          abstract: `Tongue squamous cell carcinoma (TSCC) is characterized by high recurrence rates and poor prognosis...`,
          links: [
            { label: "Extract" },
            { label: "View article", url: "#" },
            { label: "PDF", url: "/Right/19.pdf" },
          ],
        },
      ],
    },
  ],
  issue2: [
    {
      label: "ARTICLES",
      articles: [
        {
          title: "Determinants Of Efficiency At Pt Perusahaan Listrik Negara (Persero) In 2019-2023 Using Two Stage Data Envelopment Analysis (Dea) Model",
          url: "/issue2/1.pdf",
          authors: ["Aji Suprayogo1", "Irni Yunita2"],
          free: true,
          abstract: `Operational efficiency is a major challenge for PT PLN (Persero) in ensuring resource optimization amidst the dynamics of the energy industry.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue2/1.pdf" },
          ],
        },
        {
          title: "Decoding The Molecular Landscape of Erdheim–Chester Disease: From BRAF to Beyond",
          url: "/issue2/2.pdf",
          authors: ["Syed Mohamed Omar1", "Arya Sandip Jadhav1", "Raziur Rahman M1", "Sujitha Mathivanan1", "Vaishnav S1", "Ashwin S1"],
          free: true,
          abstract: `Erdheim-Chester disease (ECD) is a rare, multisystemic non-Langerhans cell histiocytosis that causes clonal proliferation of lipid-laden CD68⁺/CD1a⁻ foamy histiocytes.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue2/2.pdf" },
          ],
        },
        {
          title: "Determinants Of Project Performance In National Pride Projects Of Nepal: Evidence From Delayed Projects",
          url: "/issue2/3.pdf",
          authors: ["Madan Sharma1", "A.K. Mishra2", "Janani Selvam3"],
          free: true,
          abstract: `Nepal’s National Pride Projects (NPPs) face persistent delays and cost overruns, yet limited evidence exists on how managerial, technical, financial, and institutional determinants collectively shape outcomes.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue2/3.pdf" },
          ],
        },
        {
          title: "Transparency And Human Resources Development As A Determinant Of The Health Of PDAM Performance, Empirical Study On Drinking Water Companies In West Java For The 2019-2023 Period",
          url: "/issue2/4.pdf",
          authors: ["Ugun Wiguna1", "Leny Suzan2"],
          free: true,
          abstract: `Providing clean water is essential for public health and well-being. In Indonesia, Perusahaan Daerah Air Minum (PDAM), or regional water supply companies, play a crucial role in delivering this essential service.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue2/4.pdf" },
          ],
        },
        {
          title: "Evaluation Of Birth Certificate Service Delivery In Makassar City: A Qualitative Study Using Dunn’s Criteria",
          url: "/issue2/5.pdf",
          authors: ["Nur Nisa Nila Wardani S1", "Nurlinah2", "Suhardiman Syamsu3"],
          free: true,
          abstract: `This study aims to evaluate the implementation of birth certificate services in Makassar City through the lens of William N. Dunn’s six policy evaluation criteria: effectiveness, efficiency, adequacy, equity, responsiveness, and accuracy.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue2/5.pdf" },
          ],
        },
      ],
    },
  ],
  issue3: [
    {
      label: "ARTICLES",
      articles: [
        {
          title: "Comprehensive Evaluation Of SRAM Cells: Design And Validation Of 6T To 10T Architectures",
          url: "/issue3/1.pdf",
          authors: ["Neetu Rathi1", "Anil Kumar2", "Neeraj Gupta3", "Sanjay Kumar Singh4"],
          free: true,
          abstract: `This study presents a comprehensive evaluation of Static Random-Access Memory (SRAM) cells focusing on the design and validation of architectures ranging from six-transistor (6T) to ten-transistor (10T) configurations.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue3/1.pdf" },
          ],
        },
        {
          title: "Green Entrepreneurship And Innovation As Drivers Of Green Business Performance",
          url: "/issue3/2.pdf",
          authors: ["Ari Kuncara Widagdo¹", "Rahmawati²", "Siti Rochmah Ika3", "Ratna Wijayanti Daniar Paramita4", "Sri Hartoko5", "Lyna Latifah⁶"],
          free: true,
          abstract: `The objective of this study is to examine the impact of green entrepreneurship and innovation on the enhancement of green business performance in micro, small, and medium-sized enterprises (MSMEs), with a particular focus on the tourism sector in Indonesia.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue3/2.pdf" },
          ],
        },
        {
          title: "Impact of Infused Potassium Alum – Treated Diesel on the Performance and Emissions of a CI Engine",
          url: "/issue3/3.pdf",
          authors: ["Bapanapalli Madhu Babu1", "Dr. A. Raja2", "Dr. B. Durga Prasad3"],
          free: true,
          abstract: `This study examines the effects of potassium alum, in crystalline (PAC) and powdered (PAP) forms, on diesel engine performance, combustion, and emissions. Diesel was blended with 50g, 100g, and 150g of PAC and PAP, held for 72 hours.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue3/3.pdf" },
          ],
        },
        {
          title: "Analyzing Divergent Thinking Ability of Students on The Topic of Linear Equations in Grade VIII of State Junior High School",
          url: "/issue3/4.pdf",
          authors: ["I Ketut Suastika1*", "Feny Rita Fiantika2", "Buhaerah3"],
          free: true,
          abstract: `Divergent thinking is a type of creative thinking that can provide various possible answers based on the information provided.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue3/4.pdf" },
          ],
        },
        {
          title: "Integrating Contra And Viral Marketing In Digital Consumer Behavior: A Structural Model Of Gen Z's Online Decision-Making",
          url: "/issue3/5.pdf",
          authors: ["Apippudin Adnan1", "Ujianto2", "Abdul Halik3"],
          free: true,
          abstract: `This study investigates the integrative effects of Contra Marketing (CM) and Viral Marketing (VM) on Online Decision-Making (ODM) among Generation Z in South Kalimantan, Indonesia representing a tier-2 digital ecosystem within ASEAN’s emerging markets.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue3/5.pdf" },
          ],
        },
      ],
    },
  ],
  issue4: [
    {
      label: "ARTICLES",
      articles: [
        {
          title: "Trade-Off Theory In The Management Of Economic And Financial Sustainability In Peruvian SMES",
          url: "/issue4/1.pdf",
          authors: ["Pedro Pablo Chambi-Condori1", "Moisés Ismael Escobedo-Dueñas2", "Miriam Chambi-Vásquez3"],
          free: true,
          abstract: `The main objective of this research was to analyze the impact of capital structure and cost of capital on the profitability and economic sustainability of small and medium-sized enterprises (SMEs) in Peru, using Trade-Off Theory as a theoretical framework.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue4/1.pdf" },
          ],
        },
        {
          title: "Awareness Of Cervical Derangement Syndrome in Smartphone Users",
          url: "/issue4/2.pdf",
          authors: ["Iqra Nazmuddin Maganake1", "Dr. Shraddha Mohite2"],
          free: true,
          abstract: `Overindulgence in mobile device usage is a prevalent lifestyle habit among young people and working professionals.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue4/2.pdf" },
          ],
        },
        {
          title: "The Impact Of Emotional Intelligence On Employee Creativity: A Bibliometric Review And Analysis",
          url: "/issue4/3.pdf",
          authors: ["Santa Steffina Mary S1", "Dr. Syed Khalid Perwez2"],
          free: true,
          abstract: `This study investigates the established relationship between emotional intelligence (EI) and employee creativity (EC) through a comprehensive reviews and Bibliometric Analysis of 413 research articles sourced from the SCOPUS database.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue4/3.pdf" },
          ],
        },
        {
          title: "Cause-Related Marketing In Csr Strategies: Systematic Bibliometric Analysis",
          url: "/issue4/4.pdf",
          authors: ["Ishita Pare¹", "Aman Kumar Jha²"],
          free: true,
          abstract: `Since Section 135 of the Companies Act (2013) requires CSR investment in rising economies like India, corporate social responsibility (CSR) has changed from a charitable option to a strategic imperative.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue4/4.pdf" },
          ],
        },
        {
          title: "UI/UX Interface Design in the Development of Muhammadiyah Da'wah Application for the Deaf Using the Design Thinking Method",
          url: "/issue4/5.pdf",
          authors: ["Jefree Fahana1*", "Farid Ma'ruf2", "Faisal Fajri Rahani3", "Syifa Fitriani4", "Sucipto5"],
          free: true,
          abstract: `The presence of digital technology should help make it easier for the Deaf to optimize da'wah information/materials.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue4/5.pdf" },
          ],
        },
      ],
    },
  ],
  issue5: [
    {
      label: "ARTICLES",
      articles: [
        {
          title: "Essential Oil Extraction from Various Natural Sources: A Comprehensive Review of Methods, Phytochemistry, and Biological Activities",
          url: "/issue5/1.pdf",
          authors: ["Riya B. Patel", "Miral R. Thakker"],
          free: true,
          abstract: `Essential oil is volatile organic liquid compound extracted from different plant parts of various plant materials. Essential oil has been used in many industries like pharmaceuticals, perfumery, cosmetics, and food industries due to their natural properties like antifungal, anti-aging, antiseptic and many other activities.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue5/1.pdf" },
          ],
        },
        {
          title: "A Study On The Use Of ICT Tools In Elearning And Its Impact On The Students Pursuing Higher Education",
          url: "/issue5/2.pdf",
          authors: ["R. Mahadevan1", "S. Prabakar2"],
          free: true,
          abstract: `The advancement in science and technology has drastically changed the lives of the people after the advent of computers during the late 1980’s.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue5/2.pdf" },
          ],
        },
        {
          title: "Fuzzy Expert Model for Predicting and Enhancing Button Mushroom Growth Parameters",
          url: "/issue5/3.pdf",
          authors: ["Gayatree Rathod1", "Rachna Navalakhe2", "Pushpendra Kumar Kushwaha3"],
          free: true,
          abstract: `Button mushroom farming is a complex agricultural practice requiring precise control and monitoring of various environmental variables to ensure optimal growth conditions and maximize yield.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue5/3.pdf" },
          ],
        },
        {
          title: "Insights From The Web Of Science: A Bibliometric Study On EResource Literature Output",
          url: "/issue5/4.pdf",
          authors: ["Femy Francis1*", "Dr Chinnasamy K2"],
          free: true,
          abstract: `In this digital era, electronic resources (e-resources) are becoming an essential part of education and research. As the use of eresources continues to grow, it is necessary to understand the trends and patterns in the literature surrounding them.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue5/4.pdf" },
          ],
        },
        {
          title: "Dissolved Gas Analysis Of Flaxseed Oil And Coconut Cooking Oil Blends: Thermal Degradation And Oxidative Stability In Simulated Transformer Conditions",
          url: "/issue5/5.pdf",
          authors: ["Gema Romadhona1,2", "Ketut Ima Ismara3", "Mutiara Nugraheni4"],
          free: true,
          abstract: `The search for sustainable transformer insulating fluids has led to increased interest in biodegradable vegetable oils as alternatives to conventional mineral oils.`,
          links: [
            { label: "Abstract" },
            { label: "PDF", url: "/issue5/5.pdf" },
          ],
        },
      ],
    },
  ],
};

// Map display labels to issue keys
const issueLabels = {
  "February - Volume 50, Issue1": "issue1",
  "April - Volume 50, Issue2": "issue2",
  "June - Volume 50, Issue3": "issue3",
  "August - Volume 50, Issue4": "issue4",
  "October - Volume 50, Issue5": "issue5",
};

export default function Viewallissue() {
  const [openAbstract, setOpenAbstract] = useState(null);
  const [selectedIssue, setSelectedIssue] = useState("issue1");
  const [showPopup, setShowPopup] = useState(false);
  const [sections, setSections] = useState(issueData.issue1);
  const nav = useNavigate();

  // Fetch data when issue changes
  useEffect(() => {
    setSections(issueData[selectedIssue]);
  }, [selectedIssue]);

  const handleIssueSelect = (issueLabel) => {
    setSelectedIssue(issueLabels[issueLabel]);
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-teal-50 min-h-screen py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <button
                className="mb-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all"
                onClick={() => setShowPopup(true)}
              >
                Show All Issues
              </button>
              {showPopup && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-20">
                  <div className="bg-white rounded-lg p-6 w-80">
                    <h2 className="text-lg font-bold text-teal-700 mb-4">Select an Issue</h2>
                    {Object.keys(issueLabels).map((issueLabel) => (
                      <button
                        key={issueLabel}
                        className={`w-full text-left px-4 py-2 mb-2 rounded-lg ${
                          selectedIssue === issueLabels[issueLabel]
                            ? "bg-teal-100 text-teal-700"
                            : "bg-teal-50 text-teal-600"
                        } hover:bg-teal-200 transition-all`}
                        onClick={() => handleIssueSelect(issueLabel)}
                      >
                        {issueLabel}
                      </button>
                    ))}
                    <button
                      className="mt-4 text-teal-600 underline hover:text-amber-500"
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              {sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <div className={`font-bold text-lg mb-4 ${sIdx > 0 ? "mt-8" : ""} text-teal-700`}>
                    {section.label}
                  </div>
                  {section.articles.map((a, idx) => (
                    <div key={idx} className="mb-8 pb-4 border-b border-gray-200 last:border-b-0 relative">
                      <Link
                        to={a.url}
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
                                className="px-3 py-1 border border-gray-200 rounded-lg text-sm bg-teal-50 text-teal-700 hover:bg-teal-100 transition-all"
                                onClick={() =>
                                  setOpenAbstract(openAbstract === `${sIdx}-${idx}` ? null : `${sIdx}-${idx}`)
                                }
                              >
                                {l.label} <span className="ml-1">&#9660;</span>
                              </button>
                              {openAbstract === `${sIdx}-${idx}` && (
                                <div className="absolute left-0 mt-2 w-96 bg-white border border-gray-100 rounded-lg shadow-xl z-10 p-4 text-gray-700 animate-fadeIn">
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
            <div className="bg-teal-800 text-white rounded-xl shadow-lg">
              <div className="font-bold px-4 py-2 border-b border-teal-700">EMAIL ALERTS</div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/ap')}>
                Advance Publication
              </div>
              <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all" onClick={() => nav('/')}>
                Latest Issue
              </div>
            </div>
            <RightSidebar />
          </aside>
        </div>
      </div>
      <Footer />

      <style>{`
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