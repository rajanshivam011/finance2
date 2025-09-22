import React, { useState } from 'react'
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
const RightSidebar = () => {
    const [tab, setTab] = useState(0);
  return (
    
    <div className="bg-black text-white rounded shadow mb-4">
              <div className="font-bold px-4 py-2 border-b border-gray-700">EMAIL ALERTS</div>
              <div className="bg-blue-700 px-4 py-2 hover:bg-blue-800 cursor-pointer">Advance Publication</div>
              <div className="bg-blue-700 px-4 py-2 hover:bg-blue-800 cursor-pointer">Latest Issue</div>
            
            {/* Tabs */}
            <div className="bg-white rounded shadow">
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
            </div>
            </div>
  )
}

export default RightSidebar