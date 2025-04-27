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
import Website from './pages/Service/Website/Website';
import Abouts from './pages/Abouts/Abouts';
import Facebook from './pages/Service/Facebook/Facebook';
import New1 from './pages/News/New1';
import New2 from './pages/News/New2';
import New3 from './pages/News/New3';
import New4 from './pages/News/New4';
import New5 from './pages/News/New5';
import New6 from './pages/News/New6';

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
            <Route path='/gioi-thieu' element={<Abouts />}></Route>
            <Route path='/quang-cao-facebook' element={<Ads />}></Route>
            <Route path='/ho-tro-facebook' element={<Facebook />}></Route>
            <Route path='/landing-page' element={<LandingPage />} />
            <Route path='/website' element={<Website />} />
            <Route path='/tin-tuc' element={<News />}>
            </Route>
            <Route path='top-3-tool-copy-chien-dich-quang-cao-facebook-cua-doi-thu-tot-nhat' element={<New1 />}></Route>
            <Route path='cach-nuoi-acc-facebook-ads-de-chay-quang-cao' element={<New2 />}></Route>
            <Route path='tim-hieu-dark-web-tu-co-ban-den-nang-cao' element={<New3 />}></Route>
            <Route path='top-5-shop-ban-do-gia-dung-cho-mua-he-tren-shopee-gia-re-uy-tin-chat-luong' element={<New4 />}></Route>
            <Route path='mot-so-cach-hacker-tan-cong-de-chiem-quyen-tai-khoan' element={<New5 />}></Route>
            <Route path='huong-dan-tu-lap-trinh-bang-blackbox-ai' element={<New6 />}></Route>
            <Route path='/lien-he' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </ClickSpark>
    </>
  )
}

export default App
