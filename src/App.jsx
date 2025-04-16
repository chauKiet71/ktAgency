import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News'
import Ads from './pages/Service/Ads/Ads';
import LandingPage from './pages/Service/LandingPage/LandingPage';
import ClickSpark from './pages/Components/ClickSpark/ClickSpark';
import ScrollToTop from "./pages/Components/ScrollToTop/ScrollToTop"
import Website from './pages/Service/Webstite/Website';

function App() {
  return (
    <>
      
      <ClickSpark
        sparkColor='#285e9c'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}

        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/gioi-thieu'></Route>
            <Route path='/quang-cao-facebook' element={<Ads />}></Route>
            <Route path='/landing-page' element={<LandingPage />} />
            <Route path='/website' element={<Website />} />
            <Route path='/tin-tuc' element={<News />}></Route>
            <Route path='/lien-he' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </ClickSpark>
    </>
  )
}

export default App
