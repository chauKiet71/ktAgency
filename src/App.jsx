import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News'
import Ads from './pages/Service/Ads/Ads';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gioi-thieu'></Route>
          <Route path='/quang-cao-facebook' element={<Ads />}></Route>
          <Route path='/tin-tuc' element={<News />}></Route>
          <Route path='/lien-he' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
