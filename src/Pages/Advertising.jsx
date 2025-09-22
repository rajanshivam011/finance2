import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Advertising = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold mb-8">Journal of Health Politics, Policy and Law</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with photo-like cover */}
          <aside className="w-full md:w-1/4 rounded shadow p-0 flex flex-col items-center">
            <div className="w-80 h-[420px] bg-gradient-to-b from-[#503a56] to-purple-200 rounded-lg overflow-hidden shadow-xl border-4 border-white mb-4">
              <div className="mt-10 mb-32 text-center leading-tight text-white">
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
            </div>
            <div className="ml-2 mt-2 text-xs text-gray-700 font-bold">
              ISSN 0361-6878<br />
              EISSN 1527-1927
            </div>
            <div className="font-bold mt-4 mb-2 ml-2">In this Issue</div>
            <ul className="text-sm text-blue-700 space-y-1 mb-4 ml-2">
              <li>Articles</li>
              <li>Tracking Health Reform</li>
            </ul>
            <a href="#" className="text-blue-700 underline text-sm ml-2">&lt; Previous Issue</a>
          </aside>

          {/* Journal Info and Description */}
          <div className="flex-1">
            <div className="border rounded mb-6 p-4 bg-white">
              <div>Journal</div>
              <div>Current Volume: 50</div>
              <div>Frequency: Bi-Monthly</div>
            </div>
            <div className="mb-4 text-lg">
              <strong>Academic Editor:</strong>{" "}
              <a href="#" className="text-blue-700 hover:underline">Sarah E. Gollust</a>
            </div>
            <p className="text-gray-800 text-lg mb-6">
              A leading journal in its field, and the primary source of communication across the many disciplines it serves, the <em>Journal of Health Politics, Policy and Law</em> focuses on the initiation, formulation, and implementation of health policy and analyzes the relations between government and health—past, present, and future.
            </p>
            <a
              href="#"
              className="text-blue-700 text-lg hover:underline"
            >
              Read scholarship from the journal on the COVID-19 global health crisis.
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Advertising;
