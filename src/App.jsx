import Nav from './components/Nav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stock from './pages/Stock';
import About from './components/About';
import {Route, Routes} from 'react-router-dom';




function App() {


  return (
    <>
      <div className='App' />
      <Nav />
      <About />
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/dashboard" element={<Dashboard />} />
        <Route path= "/stocks/:symbol" element={<Stock />} />
        <Route path="/about" element={<About />} />
       

      </Routes>
      
    </>
  )
}

export default App
