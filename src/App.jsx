import { useState } from 'react'
import Start from './pages/Start'
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Start></Start>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
        </Routes>
       </Router>
        
    </div>
  )
}

export default App
