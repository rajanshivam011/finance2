import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import About_journal from './Pages/About_journal'
import Submission_GuideLlnes from './Pages/Submission_GuideLlnes'
import Viewallissue from './Pages/Viewallissue'
import AdvancePublication from './Pages/AdvancePublication'
import Covid_19 from './Pages/Covid_19'
import Ethics from './Pages/Ethics'
import EditorialBoard from './Pages/EditorialBoard'
import Advertising from './Pages/Advertising'
import Contact_us from './components/Contact_us'
import BookAuthor from './Pages/BookAuthor'
import BookSeller from './Pages/BookSeller'
import Librarians from './Pages/Librarians'
import PJournals from './Pages/PJournals'
import License from './Pages/License'
import Society from './Pages/Society'
import Book from './Pages/Book'
import Advance_Search from './Pages/Advance_Search'
import Reading_List from './Pages/Reading_List'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/contact_us" element={<Contact_us/>} />
        <Route path="/about_journal" element={<About_journal/>} />
        <Route path="/submission_guide" element={<Submission_GuideLlnes/>}></Route>
        <Route path="/viewallissue" element={<Viewallissue/>}></Route>
        <Route path="/ap" element={<AdvancePublication/>}></Route>
        <Route path="/covid_19" element={<Covid_19/>}></Route>
        <Route path="/ethics" element={<Ethics/>}></Route>
        <Route path="/editorial_board" element={<EditorialBoard/>}></Route>
        <Route path="/advertising" element={<Advertising/>}></Route>
        <Route path="/bookauthor" element={<BookAuthor/>}></Route>
        <Route path="/content" element={<BookSeller/>}></Route>
        <Route path="/library" element={<Librarians/>}></Route>
        <Route path="/pj" element={<PJournals/>}></Route>
        <Route path="/license" element={<License/>}></Route>
        <Route path="/society" element={<Society/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/advance_search" element={<Advance_Search/>}></Route>
        <Route path="/readinglist" element={<Reading_List/>}></Route>
      </Routes>
    </Router>
  )
}

export default App