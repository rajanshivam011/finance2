import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const articles = [
  {
    title: "Health Insurance Loss during COVID-19 Increases Support for Universal Health Coverage",
    authors: "Ashley Fox, Yongjin Choi, Heather Lanthorn, and Kevin Croke",
    url: "#"
  },
  {
    title: "Introduction to “Subnational COVID-19 Politics and Policy”",
    authors: "Julia Lynch and Sarah E. Gollust",
    url: "#"
  },
  {
    title: "Who Stays at Home? The Politics of Social Distancing in Brazil, Mexico, and the United States during the COVID-19 Pandemic",
    authors: "Paul F. Testa, Richard Snyder, Eva Rios, Eduardo Moncada, Agustina Giraudy, and Cyril Bennouna",
    url: "#"
  },
  {
    title: "Who Counts Where? COVID-19 Surveillance in Federal Countries",
    authors: "Philip Rocco, Jessica A. J. Rich, Katarzyna Klasa, Kenneth A. Dubin, and Daniel Béland",
    url: "#"
  },
  {
    title: "Coping with Denialism: How Street-Level Bureaucrats Adapted and Responded to COVID-19 in Tanzania",
    authors: "Ruth Carlitz, Thespina Yamanis, and Henry Mollel",
    url: "#"
  },
  {
    title: "Investigating Dimensions of Pandemic Inequity Requires a Multidisciplinary Approach",
    authors: "Sarah E. Gollust and Julia Lynch",
    url: "#"
  },
  {
    title: "How the Trump Administration’s Pandemic Health Care Response Failed Racial Health Equity: Case Studies of Structural Racism and a Call for Equity Mindfulness in Federal Health Policymaking",
    authors: "Sara Rosenbaum, Morgan Handley, Rebecca Morris, and Maria Casoni",
    url: "#"
  },
  {
    title: "Unsanitized and Unfair: How COVID-19 Bailout Funds Refuel Inequity in the U.S. Health Care System",
    authors: "Colleen M. Grogan, Michael K. Gusmano, and Yu-An Lin",
    url: "#"
  },
  {
    title: "State Policy and Mental Health Outcomes under COVID-19",
    authors: "Michael W. Sances and Andrea Louise Campbell",
    url: "#"
  },
  {
    title: "The Treatment of Disability Under Crisis Standards of Care: An Empirical and Normative Analysis of Change Over Time During COVID-19",
    authors: "Ari Ne’eman, Michael Ashley Stein, Zackary D. Berger, and Doron Dorfman",
    url: "#"
  },
  {
    title: "Compounding Racialized Vulnerability: COVID-19 in Prisons, Jails, and Migrant Detention Centers",
    authors: "Matthew G.T. Denney and Ramon Garibaldo Valdez",
    url: "#"
  },
  {
    title: "Americans’ View of the Impact of COVID-19: Perspectives on Racial Impacts and Equity",
    authors: "Katherine Carman, Anita Chandra, Carolyn Miller, Christopher Nelson, and Jhacova Williams",
    url: "#"
  },
  {
    title: "Pandemic Politics: Timing State-Level Social Distancing Responses to COVID-19",
    authors: "Christopher Adolph, Kenya Amano, Bree Bang-Jensen, Nancy Fullman, and John Wilkerson",
    url: "#"
  },
  {
    title: "Introduction to “COVID-19: Politics, Inequalities, and Pandemic”",
    authors: "Jonathan Oberlander",
    url: "#"
  },
  {
    title: "Disaster Preparedness and Social Justice in a Public Health Emergency",
    authors: "Harold A. Pollack",
    url: "#"
  },
  {
    title: "Equitable Pandemic Preparedness and Rapid Response: Lessons from COVID-19 for Pandemic Health Equity",
    authors: "Philip M. Alberti, Paula M. Lantz, and Consuelo H. Wilkins",
    url: "#"
  },
  // Added articles below
  {
    title: "Racism and the Political Economy of COVID-19: Will We Continue to Resurrect the Past?",
    authors: "Zinzi Bailey and J. Robin Moon",
    url: "#"
  },
  {
    title: "Federalism Complicates the Response to the COVID-19 Health and Economic Crisis: What Can Be Done?",
    authors: "Nicole Huberfeld, Sarah H. Gordon, and David K. Jones",
    url: "#"
  },
  {
    title: "The Emergence of COVID-19 in the U.S.: A Public Health and Political Communication Crisis",
    authors: "Sarah E. Gollust, Rebekah H. Nagler, and Erika Franklin Fowler",
    url: "#"
  },
  {
    title: "Health Equity, Social Policy, and Promoting Recovery from COVID-19",
    authors: "Julia Lynch",
    url: "#"
  },
  {
    title: "Democracy, Capacity, and Coercion in Pandemic Response—COVID 19 in Comparative Political Perspective",
    authors: "Matthew M. Kavanagh and Renu Singh",
    url: "#"
  },
  {
    title: "Understanding the Anemic Global Response to COVID-19",
    authors: "Joshua W. Busby",
    url: "#"
  }
];

const Covid_19 = () => {
  return (
    <><Navbar/> 
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">COVID-19 Articles</h1>
      <p className="mb-6 text-lg text-gray-700">
        Articles on this page address the COVID-19 global health crisis from an array of disciplinary perspectives. These essays explore the pandemic as a political, social, and comparative phenomenon that is likely to redefine public health, health policy, and health care politics for years to come.
      </p>
      <hr className="mb-6" />
      <div>
        {articles.map((art, idx) => (
          <div key={idx} className="mb-6">
            <a href={art.url} className="text-blue-700 text-lg font-semibold hover:underline block">
              {art.title}
            </a>
            <div className="text-gray-800 text-base">{art.authors}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Covid_19;