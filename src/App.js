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
    <Header/>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/works' element={<Workspage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='*' element={<Notfoundpage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
