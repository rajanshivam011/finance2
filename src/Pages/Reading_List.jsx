// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const readToRespondLists = [
  "Asian/Pacific American Cultures and Histories",
  "Care in Uncertain Times",
  "Catastrophe and Its Aftermath",
  "Conceptualizing COVID",
  "Critical University Studies",
  "Elections in Global History",
  "Environmentalism and Climate Change",
  "Feminist Politics and Women’s Rights",
  "Global Immigration",
  "Globalization, Neoliberalism, and the Global Rise of Right‑Wing Politics",
  "Invisible Man",
  "James Baldwin Centennial",
  "Labor and Precarity",
  "Navigating the Threat of Pandemic",
  "Police Violence",
  "Political Protests and Movements of Resistance",
  "Prison and the Carceral State",
  "Racial Justice",
  "Reproductive Rights",
  "Revisiting Queer Studies",
  "Tariffs and Trade: A Historical Perspective",
  "Trans Rights",
  "Women's Labor",
];

const Reading_List = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 font-sans text-slate-900">
        <div className="text-sm text-slate-500 mb-6">Home / Reading Lists</div>

        {/* HERO */}
        <header className="bg-slate-50 rounded p-8 flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-3">Read to Respond</h1>
            <p className="text-slate-700 max-w-2xl">
              Staff-curated Reading Lists of recent and relevant books, book chapters, and journal
              articles focusing on many of today's most critical issues, including climate change,
              gender, immigration, labor, police violence, racial justice, radical care, and more.
            </p>
          </div>

          <div className="w-48 h-28 flex-shrink-0">
            <img
              src="/read-to-respond-logo.webp"
              alt="Read to Respond"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="w-full h-full object-contain border"
            />
          </div>
        </header>

        {/* Reading lists */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Featured Reading Lists</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="prose">
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                {readToRespondLists.slice(0, Math.ceil(readToRespondLists.length / 2)).map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose">
              <ul className="list-disc list-inside space-y-2 text-blue-700">
                {readToRespondLists.slice(Math.ceil(readToRespondLists.length / 2)).map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:underline">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Explore subjects */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-3">Explore Subjects</h3>
          <p className="text-slate-700">
            The <a href="#" className="text-blue-700 hover:underline">Explore Subjects</a> page
            automatically filters search results from all of our publishing disciplines for an
            easy-to-browse list of books and articles from any subject in our catalog.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Reading_List;
// ...existing code...