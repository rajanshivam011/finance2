// ...existing code...
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HelpfulLink = ({ href, children }) => (
  <a href={href} className="text-blue-700 hover:underline">
    {children}
  </a>
);

const BookSeller = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 font-sans text-slate-900">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Helpful Hints:</h1>

        <div className="prose max-w-none text-slate-700">
          <p>
            Check our{" "}
            <HelpfulLink href="/faq">frequently asked questions</HelpfulLink>.
          </p>

          <p>
            Try using the search box at the top of the page or our{" "}
            <HelpfulLink href="/search">product search</HelpfulLink>.
          </p>

          <p>
            Visit our page devoted to{" "}
            <HelpfulLink href="/librarians">librarians and consortia</HelpfulLink>.
          </p>
        </div>

        <section className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">Looking for job opportunities?</h2>
            <p className="text-slate-700">
              You can find job postings on our{" "}
              <HelpfulLink href="/jobs">job opportunities page</HelpfulLink>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Looking for information on our collections?</h2>
            <p className="text-slate-700">
              You can find information on our{" "}
              <HelpfulLink href="/collections">electronic collections page</HelpfulLink>.
            </p>
            <p className="mt-4 text-slate-700">
              If you still can't find what you are looking for,{" "}
              <HelpfulLink href="/contact">contact us</HelpfulLink> and we will get back to you as soon as we can.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Helpful resources</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li><HelpfulLink href="/shipping">Shipping & delivery</HelpfulLink></li>
                <li><HelpfulLink href="/returns">Returns & refunds</HelpfulLink></li>
                <li><HelpfulLink href="/account">Manage your account</HelpfulLink></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Need more help?</h3>
              <p className="text-slate-700">
                Use our product search, explore the collections pages, or{" "}
                <HelpfulLink href="/contact">get in touch</HelpfulLink> for personalized assistance.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BookSeller;
// ...existing code...