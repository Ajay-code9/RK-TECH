import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RKTech from './pages/RKTech'
import CRM_ERP from './pages/CRM_ERP'
import Software from './pages/Software'
import Marketplace from './pages/Marketplace'
import Education from './pages/Education'
import Contact from './pages/Contact'
import About from './pages/About'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rk-tech-blockchain' element={<RKTech/>}/>
      <Route path='/crm-erp' element={<CRM_ERP/>}/>
      <Route path='/marketplace' element={<Marketplace/>}/>
      <Route path='/softwares' element={<Software/>}/>
      <Route path='/codexAayaam-education' element={<Education/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default App