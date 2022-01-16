import './App.scss';
import { Header } from './components/Header';
import { Routes, Route, Link } from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import Workspage from "./pages/Workspage";
import Contacts from "./pages/Contacts";
import Notfoundpage from './pages/Notfoundpage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="wrapper">
    <Header/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/works' element={<Workspage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
