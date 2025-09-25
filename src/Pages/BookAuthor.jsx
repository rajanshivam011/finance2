// ...existing code...
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const cards = [
  { title: 'Share Your Article', img: '/Author/society.jpg' },
  { title: 'Support For Journal Editors', img: '/Author/support.jpg' },
  { title: 'Information For Prospective Journals', img: '/Author/info.jpg' },
  { title: 'Societies', img: '/Author/society.jpg' },
  { title: 'Mathematics at DUP', img: '/Author/maths.jpg' },
  { title: 'New Journals', img: '/Author/newj.jpg' },
  { title: 'Journal List', img: '/Author/society.jpg' },
  { title: 'Contact Journal Liaison', img: '/Author/newj.jpg' },
]

const BookAuthor = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-8 font-sans text-slate-900">
      <div className="text-sm text-slate-500 mb-6">Home / Book Authors</div>

      <header className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-slate-50 p-8 rounded">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Information for Journal Authors and Editors</h1>
          <p className="text-base text-slate-600">Resource center for journal authors and editors.</p>
        </div>

        <div className="w-full md:w-80 h-36 md:h-40 overflow-hidden rounded">
          <img alt="books" src="/ethics.webp" className="w-full h-full object-cover" />
        </div>
      </header>

      <main className="mt-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
        <aside className="space-y-4">
          <h3 className="text-xs tracking-widest font-semibold">IN THIS SECTION</h3>
          <ul className="space-y-3">
            <li className="text-blue-700 hover:underline cursor-pointer">Submission Guidelines</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Ethics and Policies for Journals</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Permissions Information for Journal Authors</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Share Your Article</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Support For Journal Editors</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Author Resources from University Presses</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Journal Community Websites</li>
            <li className="text-blue-700 hover:underline cursor-pointer">FAQ</li>
            <li className="text-blue-700 hover:underline cursor-pointer">Conferences</li>
          </ul>
        </aside>

        <section>
          {/* consolidated image block (mosaic)
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {cards.slice(0,4).map((c, i) => (
              <div key={i} className="border border-slate-200 p-4 bg-white flex items-center justify-center h-28">
                <img alt={c.title} src={c.img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div> */}

          {/* card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <article key={i} className="bg-white border border-slate-200 p-6 text-center">
                <div className="h-40 mb-4 overflow-hidden flex items-center justify-center">
                  <img alt={card.title} src={card.img} className="w-full h-full object-cover" />
                </div>
                <div className="h-1 w-2/5 mx-auto bg-slate-800 mb-3" />
                <h4 className="text-blue-700 font-semibold text-lg">{card.title}</h4>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
    <Footer/></>
  )
}

export default BookAuthor
// ...existing code...