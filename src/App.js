import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router , Route , Switch , Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Homepage from './components/Pages/Homepage';
import Aboutepage from './components/Pages/Aboutepage';
import ContactMe from './components/Pages/ContactMe';
function App() {
  return (
    <>
      <Router basename='/private/'>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/aboute" element={<Aboutepage/>}/>
            <Route path="/contact" element={<ContactMe/>}/>
         </Routes>
         <Footer/>
      </Router>
    </>
  );
}

export default App;
