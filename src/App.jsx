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
import Polar from './content/Polar'
import WellNess from './content/WellNess'
import Mediaid from './content/Mediaid'
import Public_Support from './content/Public_Support'
import Paid_leave from './content/Paid_leave'
import Pain_gain from './content/Pain_gain'
import Section115 from './content/Section115'
import Affordable_Care from './content/Affordable_Care'
import Information_Ethics from './content/Information_Ethics'
import Democracy from './content/Democracy'

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
        <Route path="/polar" element={<Polar/>}></Route>
        <Route path="/wellness" element={<WellNess/>}></Route>
        <Route path="/mediaid" element={<Mediaid/>}></Route>
        <Route path="/public_support" element={<Public_Support/>}></Route>
        <Route path="/paid_leave" element={<Paid_leave/>}></Route>
        <Route path="/pain_gain" element={<Pain_gain/>}></Route>
        <Route path="/section115" element={<Section115/>}></Route>
        <Route path="/affordable_care" element={<Affordable_Care/>}></Route>
        <Route path="/information_ethics" element={<Information_Ethics/>}></Route>
        <Route path="/democracy" element={<Democracy/>}></Route>
      </Routes>
    </Router>
  )
}

export default App