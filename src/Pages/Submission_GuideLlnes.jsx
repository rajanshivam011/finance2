import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Submission_GuideLlnes = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded shadow p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Submission Guidelines</h1>
          <p className="text-lg text-gray-900 mb-4">
            The <span className="italic">Journal of Health Politics, Policy and Law</span> seeks to publish original research and commentary on the initiation, formulation, implementation, and impacts of health policy; the political influences on and consequences of health care policy, public health policy, and health reform; and the relations between government and health. Our audience is broad and interdisciplinary; thus, we expect manuscripts to speak to readers both adjacent to and distant from authors’ native disciplines. We welcome submissions from political scientists, economists, legal scholars, sociologists, health services and public health researchers, and others, as long as the work exhibits intellectual rigor, scholarly depth, accessible writing, and relevance beyond next week’s headlines.
          </p>
          <p className="text-lg text-gray-900 mb-4">
            Authors may submit their work to <span className="italic">JHPPL</span>’s main section or one of its special sections (more below). All submissions to <span className="italic">JHPPL</span> are prereviewed by an editor. If the editor decides to move an article forward, it undergoes double-blind peer review. Decisions whether to move an article forward are made within a week; for manuscripts sent out for review, our average turnaround time from initial submission to first decision is about two months.
          </p>
          <p className="text-lg text-gray-900 mb-4">
            We do not accept simultaneous submissions.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">General Specifications</h2>
          <ul className="list-disc ml-8 text-lg text-gray-900 space-y-2 mb-8">
            <li>Anonymized manuscript</li>
            <li>Microsoft Word file</li>
            <li>File name should be article short title (no author names)</li>
            <li>Times New Roman</li>
            <li>12-pt. font</li>
            <li>Double-spaced</li>
            <li>Page numbers</li>
          </ul>

          {/* Documentation Section */}
          {/* <h2 className="text-lg font-bold mb-2 text-gray-900">Documentation</h2>
          <p className="mb-4 text-gray-900">
            <span className="italic">JHPPL</span> follows <span className="italic">The Chicago Manual of Style</span>'s author-date style for in-text citations and references with some key exceptions. Before formatting your references, please consult the examples below as well as the <a href="#" className="text-blue-700 underline">JHPPL style sheet</a>, which includes Duke University Press journals’ documentation requirements and <span className="italic">JHPPL</span>’s exceptions.
          </p>
          <div className="mb-2 italic text-gray-900">Examples</div> */}
          <div className="mb-2">
            <a href="#" className="underline text-gray-900">In-Text Citation</a>
          </div>
          <p className="mb-4 text-gray-900">
            These increases in coverage reduced health care access disparities by income and race/ethnicity (Griffith et al. 2020; Kominski, Nonzee, and Sorensen 2017; Lipton, Decker, and Sommers 2019).
          </p>
          <div className="mb-2">
            <a href="#" className="underline text-gray-900">Reference List</a>
          </div>
          <p className="mb-4 text-gray-900">
            Anderson, David, and Paul Shafer. 2019. “The Trump Effect: Postinauguration Changes in Marketplace Enrollment.” <span className="italic">Journal of Health Politics, Policy and Law</span> 44, no. 5: 715–36.<br />
            KFF (Kaiser Family Foundation). 2018. “Kaiser Health Tracking Poll—January 2018: The Public’s Priorities and Next Steps for the Affordable Care Act.” January. files.kff.org/attachment/Topline-Kaiser-Health-Tracking-Poll%E2%80%93January-2018.<br />
            Pear, Robert, and Thomas Kaplan. 2017. “Senate Rejects Slimmed-Down Obamacare Repeal as McCain Votes No.” <span className="italic">New York Times</span>, July 27. www.nytimes.com/2017/07/27/us/politics/obamacare-partial-repeal-senate-republicans-revolt.html.
          </p>

          {/* Article Types Section */}
          <h2 className="text-lg font-bold mb-2 text-gray-900">Article Types</h2>
          <div className="mb-2 italic text-gray-900">Commentaries</div>
          <p className="mb-4 text-gray-900">
            We consider shorter (~1,500–3,500 words) essays on topics in health politics, policy, and law. Although commentaries may address current events, they should hold broader relevance. These commentaries may present empirical data. Abstracts (200 words max) for commentaries should be unstructured.
          </p>
          <div className="mb-2 italic text-gray-900">Original Research</div>
          <p className="mb-4 text-gray-900">
            Research articles should offer novel theoretical and/or empirical insights, using whatever approach is most appropriate to the task: quantitative, qualitative, or mixed methods. Our typical word limit for original research articles is 8,000 words, though we will consider longer submissions.
          </p>
          <p className="mb-4 text-gray-900">
            Research articles should feature a structured abstract (200 words max) with the following headings:
          </p>
          <ul className="list-none ml-0 text-gray-900 mb-4">
            <li><span className="font-bold">Context:</span> [An explanation of the article’s background, objectives, and salience for policy and research.]</li>
            <li><span className="font-bold">Methods:</span> [A description of the procedures used to obtain and analyze data and/or research materials.]</li>
            <li><span className="font-bold">Findings:</span> [A summary of the results from the analyses.]</li>
            <li><span className="font-bold">Conclusions:</span> [A summary of the findings’ implications for policy, practice, and future research.]</li>
          </ul>
          <div className="mb-2 italic text-gray-900">Special Section Submissions</div>
          <div className="mb-2">
            <a href="#" className="underline text-gray-900">Tracking Health Reform</a>
          </div>
          <p className="mb-4 text-gray-900">
            Articles that appear in “Tracking Health Reform” provide useful information for practitioners, stakeholders, and academics involved in national- and state-level health reform legislation, regulation, implementation, and policy evaluation in the United States. This could include new initiatives or retrenchment of previous reforms. The section typically publishes shorter papers (4,000–4,500 words) that tend to be qualitative (often case analyses) and widely accessible to practitioner, journalistic, and academic readers. Abstracts (200 words max) should be unstructured.
          </p>
          <p className="mb-4 text-gray-900">
            “Tracking Health Reform” is edited by Heather Howard (Princeton University) and Frank J. Thompson (Rutgers University).
          </p>
          <div className="mb-2">
            <a href="#" className="underline text-gray-900">Books</a>
          </div>
          <p className="mb-4 text-gray-900">
            <span className="italic">JHPPL</span> publishes reviews of recent books in the field. To propose a review or review essay, please contact Andrew Kelly at <a href="mailto:andrew.kelly@csueastbay.edu" className="text-blue-700 underline">andrew.kelly@csueastbay.edu</a>. Review copies should be sent to Andrew Kelly, Department of Public Health, 25800 Carlos Bee Blvd., Student and Faculty Services Bldg., Fifth Floor, Room 502, Hayward, CA 94542.
          </p>
          <p className="mb-4 text-gray-900">
            We do not consider unsolicited book reviews.
          </p>
          {/* <h2 className="text-lg font-bold mb-2 text-gray-900">Submission Instructions</h2> */}
          {/* <p className="mb-4 text-gray-900">
            Please visit <a href="https://mc04.manuscriptcentral.com/dup-jhppl" className="text-blue-700 underline">https://mc04.manuscriptcentral.com/dup-jhppl</a>. If this is your first time using our ScholarOne site, please register by clicking on “Create an Account” from the Log In page. Once you have registered, log in and click the “Author” tab and select “Start New Submission.”
          </p> */}
          {/* <p className="mb-4 text-gray-900">
            If you have difficulty registering or submitting your manuscript, please contact us at <a href="mailto:jhppl-editor@dukeupress.edu" className="text-blue-700 underline">jhppl-editor@dukeupress.edu</a>.
          </p> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Submission_GuideLlnes