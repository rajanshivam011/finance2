import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import About_journal from './Pages/About_journal'
import Submission_GuideLlnes from './Pages/Submission_GuideLlnes'

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
      </Routes>
    </Router>
  )
}

export default App