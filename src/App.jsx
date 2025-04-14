import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
      <Home/>

      <Routes>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
