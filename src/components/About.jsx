import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">About Duke University Press</h1>
          <p className="mb-4 text-gray-800">
            Duke University Press supports scholars in doing what they are passionate about: learning, teaching, and effecting positive change in the world. This bold, progressive spirit drives both what and how we publish. Each year we publish about 140 new books, more than 55 journals, and multiple digital collections that transform current thinking and move fields forward. We thrive as a nonprofit publisher because we adapt, innovate, and form strong global partnerships. It is our mission to find, curate, enrich, and disseminate scholarship that is vital to readers working at the forefront of their fields in the humanities, social sciences, and mathematics.
          </p>
          <p className="mb-4 text-gray-800">
            Our work supports Duke University’s mission to advance the frontiers of knowledge and contribute to the international community of scholarship.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900">Our Mission</h2>
          <p className="mb-4 text-gray-800">
            Of the objectives listed in Duke University's mission statement, the Press contributes most significantly to the University's dual commitments to "advance the frontiers of knowledge and contribute boldly to the international community of scholarship" and to "promote a sincere spirit of tolerance, a sense of the obligations and rewards of citizenship, and a commitment to learning, freedom and truth."
          </p>
          <p className="mb-4 text-gray-800">
            Like the University as a whole, the Press seeks to pursue its objectives with vision and integrity. In the case of the Press, that means a commitment to the highest standards of both critical scholarly review and professional publishing judgment.
          </p>
          <h2 className="text-2xl italic font-bold mt-8 mb-2 text-gray-900">Commitment to Quality</h2>
          <p className="mb-4 text-gray-800">
            By insisting on thorough peer review procedures in combination with careful editorial judgment, the Press performs an intellectual gatekeeping function, ensuring that only scholarship of the highest quality receives the imprimatur of the University. At the same time, through its close association with the faculty and its own willingness to take risks, the Press reflects the bold spirit of the University: it does not and must not shy away from scholarship that is innovative or controversial.
          </p>
          <p className="mb-4 text-gray-800">
            By insisting on high editorial standards and on excellence in design and production, the Press enhances significantly the manuscript raw materials it receives from its authors, creating publications that are a pleasure to look at and hold, that do not frustrate the reader through sloppiness or inconsistency; and thus it helps to foster the love of learning.
          </p>

          {/* Additional Section from the linked image */}
          <h2 className="text-2xl italic font-bold mt-8 mb-2 text-gray-900">Commitment to Access</h2>
          <p className="mb-4 text-gray-800">
            By promoting the books it publishes to an international community of scholars as well as to nonspecialist readers outside the academic world, the Press ensures that scholars have available the resources they need for their teaching and research, and helps to bridge the gaps that can sometimes grow between the academic community and the broader community of educated readers.
          </p>

          <h2 className="text-2xl italic font-bold mt-8 mb-2 text-gray-900">Nonprofit Attitudes Toward Scholarly Communication</h2>
          <p className="mb-4 text-gray-800">
            Through business practices that place service to scholarship above commercial interest, 
            without sacrificing the business acumen necessary to make the most of its limited resources, 
            the Press fosters nonprofit attitudes toward scholarly communication, 
            demonstrating that universities can build efficient and businesslike 
            operations that do not sacrifice long-term goals for short-term profits.
          </p>

          <h2 className="text-2xl italic font-bold mt-8 mb-2 text-gray-900">Vital And Essential</h2>
          <p className="mb-4 text-gray-800">
            If the university presses vanished, scholarly communication in the liberal arts,
             and particularly in the humanities and social sciences, would shrivel;
              the system for granting academic promotions and tenure would collapse;
               graduate and upper-level courses would lack texts; and academic libraries
                would be faced, in many fields, with a sudden shortage of new materials. 
                Duke University Press represents the important contribution that Duke University 
                makes to this vital and essential scholarly publishing enterprise. And, by performing 
                its role in this enterprise in a manner that is both excellent and in keeping with the special character of its parent university, 
                Duke University Press helps to make Duke one of the nation's outstanding universities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About