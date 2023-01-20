import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Photos from './Pages/Photos';
import Views from './Pages/Views';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="bg-[url('https://i.imgur.com/9yTBOFm.jpg')]">

      <Routes>
        {/* <Route path='/' element={<Landing />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Photos' element={<Photos />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

