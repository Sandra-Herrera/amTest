import './App.scss';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/landingPage/LandingPage';
import LandingPageClass from './components/landingPage/LandingPageClass'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPageClass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
