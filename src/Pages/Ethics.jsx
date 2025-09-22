import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Ethics() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="text-blue-700 hover:underline cursor-pointer">Home</span> /{" "}
          <span className="text-blue-700 hover:underline cursor-pointer">Journal Authors and Editors</span> /{" "}
          <span>Ethics and Policies for Journals</span>
        </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Ethics and Policies for Journals</h1>
            <p className="text-lg text-gray-700">
              Duke University Press is committed to the highest standards of both critical scholarly review and professional publishing judgment.
            </p>
          </div>
          <img
            src="/ethics.webp"
            alt="Bookshelf"
            className="w-full md:w-[400px] h-40 md:h-56 object-cover rounded mt-6 md:mt-0"
          />
        </div>
        {/* Main Section */}
        <div className="flex flex-col md:flex-row gap-12 mt-8">
          {/* Left: Section Links */}
          <div className="md:w-1/3">
            <div className="font-bold text-md mb-4 tracking-wide">IN THIS SECTION</div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-700 text-lg hover:underline">Submission Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-blue-700 text-lg hover:underline">Ethics and Policies for Journals</a>
              </li>
              <li>
                <a href="#" className="text-blue-700 text-lg hover:underline">Permissions Information for Journal Authors</a>
              </li>
              <li>
                <a href="#" className="text-blue-700 text-lg hover:underline">Share Your Article</a>
              </li>
            </ul>
          </div>
          {/* Right: Guiding Principles */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Guiding Principles</h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              By insisting on thorough peer review procedures in combination with careful editorial discernment, Duke University Press (DUP) performs an intellectual gatekeeping function, ensuring that only scholarship of the highest quality receives the imprimatur of Duke University. All publications from DUP formally begin with an evaluation by our faculty board, called the Editorial Advisory Board (EAB). The purpose of Duke University’s EAB is to validate the scholarship published by its press.
            </p>
            {/* Additional content */}
            <h3 className="text-xl font-bold mt-8 mb-2">Editorial Responsibilities</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Editorial Direction and Decisions
                All of the journals at DUP are under the editorial direction of their independent editor or editors. It is the editors who make the final publication decisions; they ensure the accuracy, completeness, and originality of every published article; they are accountable for all the content published in their journals. All editorial decisions are made following rigorous, fair, and timely peer review. 

                We provide appropriate systems, training, and support on peer review to journal editors and encourage both editors and peer reviewers to familiarize themselves with and act in accordance with relevant best practice guidelines on peer review. Editors and peer reviewers should refer to COPE’s Ethical Guidelines for Peer Reviewers and are expected to protect the confidentiality of participants in the peer review process where anonymity forms part of that publication’s peer review process. 

                DUP supports our editors in their efforts to manage their journals ethically and transparently, while adhering to the established editorial principles and practices in their field.
            </p>
            <h3 className="text-xl font-bold mb-2">Special Issues</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             Many DUP journals publish special issues. While guest editors often play a key role in selecting articles for these issues, the journal’s independent editor or editors make the final publication decisions, and these decisions are made following the same peer review process as for regular articles.
            </p>
            <h3 className="text-xl font-bold mb-2">Research Malpractice</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              In instances where an editor finds that a significant error has been published for which a correction needs to be made, and in all cases where there is reason for concern about such matters as plagiarism, fabrication of research, duplicate publication, or failure to disclose conflicts of interest, the editor will review and resolve the matter in consultation with DUP. 
Editorial teams are expected to check for plagiarism as a standard part of their peer review process. DUP and its journal editors are willing to publish corrections, clarifications, and retractions when needed. In all instances, DUP is committed to preserving the integrity of the scholarly version of record. Anyone who has reason to think that specific research published in a DUP journal exhibits research malpractice should bring their concern directly to the attention of the journal's editor(s), or email DUP at dup_journalsdirector@duke.edu.
            </p>
            <h3 className="text-xl font-bold mb-2">Author Responsibilities</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Authors should submit only original work that properly cites or quotes the work of others. DUP will not accept work substantially written by generative AI and Large Language Models (LLMs). Authors must disclose the use of AI or LLMs in their work in a general statement at the beginning of their article (for instance, in an unnumbered note). In addition, each specific use of AI and LLM tools in text, images, tables, or other parts of the work must be cited—just as any external source would be. 

Individual journals published by the Press may have more specific guidelines for the use of generative AI and LLMs.

Articles should not be simultaneously under consideration by another journal.
            </p>
            <h3 className="text-xl font-bold mb-2">Intellectual Integrity and Property</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Authors are fully responsible for the entirety of their work. Authors must guarantee that their submitted work contains no matter that can be construed as libelous or as infringing in any way on the copyright of another party.
            </p>
             <h3 className="text-xl font-bold mb-2">Disclosure of Conflict of Interest</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              All listed authors must disclose in their submission any financial or other substantive conflict of interest that might be construed to influence the results or interpretation of their work. All sources of financial support for their research must be disclosed.
            </p>
            <h3 className="text-xl font-bold mb-2">Data Sharing</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Authors should be prepared to provide the raw data in connection with their work for editorial review and should be prepared to provide public access to such data, if practicable.
            </p>
            <h3 className="text-xl font-bold mb-2">Errors and Corrections</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             If an author discovers a significant error or inaccuracy in their published work, it is the author’s obligation to promptly notify the journal editor and cooperate fully with the editor to correct the article with a published erratum or to retract it.
            </p>
            <h3 className="text-xl font-bold mb-2">Author Fees</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             Authors are not charged any submission or article-processing fees by the Press.
            </p>
            <h3 className="text-xl font-bold mb-2">Professional Conduct</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             Editors, editorial board members, reviewers, and authors are expected to communicate in a respectful and professional manner. Any form of intimidation, harassment, or discrimination is unacceptable and may lead to appropriate action (e.g., removal from an editorial board or removal of an article from the publication queue).
            </p>
            <h3 className="text-xl font-bold mb-2">COPE</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             The Committee on Publication Ethics (COPE) provides resources for journal editors, peer reviewers, and authors on the topic of professional publishing standards at publicationethics.org. DUP is a member of the Association of University Presses, which is a corporate member of COPE. The Press’s ethics and malpractice policies and guidelines are aligned with the set of Core Practices developed by COPE.
            </p>
             <h3 className="text-xl font-bold mb-2">Copyright, Licensing, and Self-Archiving</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
             <h3>Open Access Journals</h3>
                Articles in OA journals are published under a Creative Commons license (BY-NC-ND 4.0) and are open immediately upon publication. Authors retain copyright and full publishing rights without restrictions.
            </p>
            <h3 className="text-xl font-bold mb-2">Subscription Journals</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
                Articles in subscription journals are usually published under the copyright of the Press or the journal’s sponsor. Authors retain a variety of rights, including the right to republish the article in any book they may write or edit after the journal issue has appeared.
            </p>
            <h3 className="text-xl font-bold mb-2">Self-Archiving</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
                Authors may post their accepted article manuscript (AAM) noncommercially, without embargo, on their personal website, in their university repository, and in other nonprofit or governmental open access repositories, with copyright and source information provided along with a link to the published version as soon as it is available. Where required by their funder or institution, authors may also apply a Creative Commons license (BY 4.0) to the AAM. (This approach meets the OA requirements of UKRI and Wellcome, among other funders.)
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}