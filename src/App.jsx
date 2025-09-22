import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import About_journal from './Pages/About_journal'
import Submission_GuideLlnes from './Pages/Submission_GuideLlnes'
import Viewallissue from './Pages/Viewallissue'
import HospCon from './content/HospCon'
import Crisis from './content/Crisis'
import AdvancePublication from './Pages/AdvancePublication'
import Covid_19 from './Pages/Covid_19'
import Ethics from './Pages/Ethics'
import EditorialBoard from './Pages/EditorialBoard'
import Advertising from './Pages/Advertising'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/about_journal" element={<About_journal/>} />
        <Route path="/submission_guide" element={<Submission_GuideLlnes/>}></Route>
        <Route path="/viewallissue" element={<Viewallissue/>}></Route>
        <Route path="/hos_con" element={<HospCon/>}/>
        <Route path="/crisis" element={<Crisis/>}></Route>
        <Route path="/ap" element={<AdvancePublication/>}></Route>
        <Route path="/covid_19" element={<Covid_19/>}></Route>
        <Route path="/ethics" element={<Ethics/>}></Route>
        <Route path="/editorial_board" element={<EditorialBoard/>}></Route>
        <Route path="/advertising" element={<Advertising/>}></Route>
      </Routes>
    </Router>
  )
}

export default App