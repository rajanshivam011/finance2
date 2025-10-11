import React, { useState } from "react";
import { Link } from "react-router-dom";

const sidebarTabs = [
  {
    label: "LATEST",
    articles: [
      {
        title:
          "Self‑Serving Data Marts Orchestrated by AutoML-Governed Pipelines",
        url: "/Right/1.pdf",
      },
      {
        title:
          "Bi-Layered Nanofibrous Mats For The Effective Treatment Of Infected Diabetic Wounds ",
        url: "/Right/2.pdf",
      },
      {
        title: "Effectiveness of Diabetes Risk Reversal Strategies on Cognition, Attitude, and Indian Diabetes Risk Score Among People in a Community at Selected Areas of Puducherry",
        url: "/Right/3.pdf",
      },
      {
        title:
          "The Intersection of Leadership Characteristics, Financial Literacy, And Risk Perception: A Multivariate Analysis of Their Impact on Investment Behaviour Among Women Investors ",
        url: "/Right/4.pdf",
      },
      {
        title:
          "Effect of Fly Ash Reinforcement on the Mechanical Properties and Environmental Sustainability of 316L Stainless Steel Composite ",
        url: "/Right/5.pdf",
      },
      {
        title:
          "Study the Metabolism of Fatty Acids in Sera of COVID19 Patients in Duhok City/Iraq",
        url: "/Right/16.pdf",
      },
    ],
  },
  {
    label: "MOST READ",
    articles: [
      {
        title: "Carbon Footprint of Novo Ecijano Students: Awareness,Behavioral Intentions, And Practices ",
        url: "/Right/6.pdf",
      },
      { title: "Formulation And Evaluation Of Lotus Seeds Enriched Millet Flour Based Bakery Products ", url: "/Right/17.pdf" },
      {
        title:
          "Hand-Gesture Recognition System for Sustainable Technology in Environmental Monitoring",
        url: "/Right/7.pdf",
      },
      {
        title:
          "Optimized Hybrid Machine Learning Approaches in Empowering Government Initiatives: Trends and Challenges ",
        url: "/Right/8.pdf",
      },
      {
        title: "Intelligent Tourism Forecasting For Climate Change- A Hybrid Approach Using ARDL And LSTM Models",
        url: "/Right/9.pdf",
      },
      {
        title:
        "Formulation And Evaluation Of Lotus Seeds Enriched Millet Flour Based Bakery Products ",
        url: "/Right/17.pdf",
      },
    ],
  },
  {
    label: "MOST CITED",
    articles: [
      {
        title:
          "Challenges In Criminal Case Build-Up: An Assessment Of Public Prosecutors In Naga City",
        url: "/Right/10.pdf",
      },
      {
        title:
          "SUCCESSFUL MULTIMODAL THERAPY IN REFRACTORY PRURIGO NODULARIS: A CASE REPORT FROM A TROPICAL SETTING",
        url: "/Right/11.pdf",
      },
      {
        title:
          "Epidemiological trends of Cutaneous Leishmaniasis in Biskra district, Algeria ",
        url: "/Right/12.pdf",
      },
      {
        title:
          "The Influence Of Intellectual Capital On Profitability With Moderate Sales Growth In Energy Sector Companies Listed On The Indonesia Stock Exchange (IDX) In 2019-2023",
        url: "/Right/13.pdf",
      },
      {
        title:
          "Building Credibility And Organizational Status Through Corporate Social Responsibility Discourse ",
        url: "/Right/14.pdf",
      },
      {
        title:
          "The Effects of Climate Change on the Emergence and Spread of Infectious Diseases",
        url: "/Right/15.pdf",
      },
    ],
  },
];

const RightSidebar = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex flex-col gap-6 cursor-pointer">
      {/* Email Alerts */}
      {/* <div className="bg-teal-800 text-white rounded-xl shadow-lg">
        <div className="font-bold px-4 py-2 border-b border-teal-700">EMAIL ALERTS</div>
        <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all">
          Advance Publication
        </div>
        <div className="bg-teal-600 px-4 py-2 hover:bg-teal-700 cursor-pointer transition-all">
          Latest Issue
        </div>
      </div> */}

      {/* Tabs */}
      <div className=" cursor-pointer bg-white rounded-xl shadow-lg" style={{ fontFamily: "'Inter', Roboto, Helvetica, Arial, sans-serif" }}>
        <div className="flex border-b border-gray-200">
          {sidebarTabs.map((t, i) => (
            <button
              key={i}
              className={` cursor-pointer flex-1 px-4 py-2 font-bold text-sm ${
                tab === i
                  ? "border-b-2 border-teal-600 text-teal-700"
                  : "text-gray-700 hover:text-teal-600"
              } transition-all`}
              onClick={() => setTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          {sidebarTabs[tab].articles.map((art, i) => (
            <div key={i} className="mb-2">
              <Link
                to={art.url}
                target="_blank"
                className="cursor-pointer text-teal-600 text-sm hover:border-b-2 border-amber-500 transition-all"
              >
                {art.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;